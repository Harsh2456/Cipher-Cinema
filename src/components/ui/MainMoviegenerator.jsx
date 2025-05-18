import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const MainMovieGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);
  const [scriptLoading, setScriptLoading] = useState(false);
  const [frames, setFrames] = useState([]);
  const [progress, setProgress] = useState(0);
  const [imagePrompt, setImagePrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);

  // Video generation states
  const [videoLoading, setVideoLoading] = useState(false);
  const [videoUuid, setVideoUuid] = useState(null);
  const [videoStatus, setVideoStatus] = useState(null);
  const [videoError, setVideoError] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);

  console.log("API Key available:", !!process.env.REACT_APP_GEMINI_API_KEY);

  useEffect(() => {
    console.log("Environment check:");
    console.log("API Key present:", !!process.env.REACT_APP_GEMINI_API_KEY);
    console.log(
      "API Key length:",
      process.env.REACT_APP_GEMINI_API_KEY?.length
    );
  }, []);

  if (!process.env.REACT_APP_GEMINI_API_KEY) {
    console.error("Gemini API key is not loaded!");
  } else {
    console.log(
      "Gemini API key is loaded and has length:",
      process.env.REACT_APP_GEMINI_API_KEY.length
    );
  }

  const generateScript = async (prompt) => {
    setScriptLoading(true);
    try {
      const genAI = new GoogleGenerativeAI(
        process.env.REACT_APP_GEMINI_API_KEY
      );
      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
        apiVersion: "v1",
      });

      // Generate detailed script for display
      const scriptPrompt = {
        contents: [
          {
            parts: [
              {
                text: `Create a detailed movie script for the following scene:
                  Scene: ${prompt} 
                  Format as:
                  SCENE DESCRIPTION: [Detailed setting description with lighting, time of day, and atmosphere]
                  ACTION: [What happens in the scene]`,
              },
            ],
          },
        ],
      };

      // Generate concise image prompt separately
      const imagePromptRequest = {
        contents: [
          {
            parts: [
              {
                text: `Create a short, visual description (2-3 sentences) for generating a realistic photograph of this scene. Focus only on visual elements:
                  Scene: ${prompt}
                  Make it detailed but concise, focusing on:
                  - Main subjects
                  - Setting
                  - Lighting
                  - Atmosphere
                  - Colors`,
              },
            ],
          },
        ],
      };

      // Generate both in parallel
      const [scriptResult, imagePromptResult] = await Promise.all([
        model.generateContent(scriptPrompt),
        model.generateContent(imagePromptRequest),
      ]);

      const scriptResponse = await scriptResult.response;
      const imagePromptResponse = await imagePromptResult.response;

      setScript(scriptResponse.text());
      setImagePrompt(imagePromptResponse.text());
    } catch (error) {
      console.error("Generation error:", error);
      alert("Failed to generate script. Please try again.");
    } finally {
      setScriptLoading(false);
    }
  };

  const handlePromptSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    await generateScript(prompt);
  };

  const handleImageGeneration = async (e) => {
    e.preventDefault();
    if (!imagePrompt.trim()) return;

    setLoading(true);
    setFrames([]);
    setProgress(0);

    try {
      // Use the optimized image prompt instead of the script
      const response = await fetch(
        "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_STABILITY_API_KEY}`,
            Accept: "application/json",
          },
          body: JSON.stringify({
            text_prompts: [
              {
                text: `Professional photograph, realistic, 4K, highly detailed: ${imagePrompt}`,
                weight: 1,
              },
              {
                text: "cartoon, animation, illustration, drawing, low quality",
                weight: -1,
              },
            ],
            cfg_scale: 7,
            height: 1024,
            width: 1024,
            steps: 30,
            samples: 1,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        throw new Error(errorData.message || "Failed to generate image");
      }

      const data = await response.json();
      const base64Image = data.artifacts[0].base64;
      const imageUrl = `data:image/png;base64,${base64Image}`;
      setFrames([imageUrl]);
      setImageUrl(imageUrl);
      setImageBase64(base64Image);
      setProgress(100);
    } catch (error) {
      console.error("Image Generation Error:", error);
      alert(`Failed to generate image: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Step 1: Generate video from image - initial request
  const generateVideo = async () => {
    if (!imageBase64) {
      alert("No image available to generate video from");
      return;
    }

    setVideoLoading(true);
    setVideoError(null);
    setVideoStatus(null);
    setVideoUuid(null);
    setVideoUrl(null);

    try {
      // Convert data URL to base64 string - Strip the data:image/png;base64, prefix if needed
      let base64Data = imageBase64;
      if (imageUrl && imageUrl.startsWith("data:image/png;base64,")) {
        base64Data = imageUrl.replace("data:image/png;base64,", "");
      }

      // Send request to RunwayML API
      const response = await fetch(
        "https://runwayml.p.rapidapi.com/generate/image",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-host": "runwayml.p.rapidapi.com",
            "x-rapidapi-key":
              process.env.REACT_APP_RUNWAY_API_KEY ||
              "96b97ed9a5msh108499e07b1e85cp1be6bejsnf12c982523e7",
          },
          body: JSON.stringify({
            img_prompt: `data:image/png;base64,${base64Data}`,
            model: "gen3",
            image_as_end_frame: false,
            flip: false,
            motion: 5,
            seed: 0,
            callback_url: "",
            time: 5,
          }),
        }
      );

      const data = await response.json();

      if (data.uuid) {
        setVideoUuid(data.uuid);
        console.log("Video generation initiated with UUID:", data.uuid);
      } else {
        throw new Error("UUID not found in response");
      }
    } catch (error) {
      console.error("Video Generation Error:", error);
      setVideoError(error.message);
    }
  };

  // Step 2: Poll status of video generation
  useEffect(() => {
    if (!videoUuid) return;

    const interval = setInterval(async () => {
      try {
        const response = await fetch(
          `https://runwayml.p.rapidapi.com/status?uuid=${videoUuid}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "runwayml.p.rapidapi.com",
              "x-rapidapi-key":
                process.env.REACT_APP_RUNWAY_API_KEY ||
                "96b97ed9a5msh108499e07b1e85cp1be6bejsnf12c982523e7",
            },
          }
        );

        const data = await response.json();
        setVideoStatus(data);

        // Check if processing is complete
        if (data.progress === 1 || data.progress === 1.0) {
          setVideoUrl(data.output_url);
          setVideoLoading(false);
          clearInterval(interval);
          console.log("Video generation complete. URL:", data.output_url);
        }
        if (data.status === "success" && data.url) {
          setVideoUrl(data.url);
          setVideoLoading(false);
          clearInterval(interval);
        } else if (data.status === "FAILED ") {
          setVideoError("Video generation failed");
          setVideoLoading(false);
          clearInterval(interval);
        }
      } catch (error) {
        console.error("Polling error:", error);
        setVideoError(error.message);
      }
    }, 10000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [videoUuid]);

  return (
    <div className="movie-generator">
      <div className="generator-card">
        <h2>Create Your Animation</h2>
        <form onSubmit={handlePromptSubmit} className="generator-form">
          <div className="input-group">
            <label>Enter Your Prompt</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your animation (e.g., 'A butterfly flying through a magical garden')"
              required
            />
          </div>
          <button type="submit" disabled={scriptLoading}>
            {scriptLoading ? "Generating Script..." : "Generate Script"}
          </button>
        </form>

        {script && (
          <div className="script-section">
            <h3>Generated Script</h3>
            <div className="script-display">
              <textarea
                value={script}
                onChange={(e) => setScript(e.target.value)}
                placeholder="Your generated script will appear here..."
                readOnly
              />
            </div>
            <button
              onClick={handleImageGeneration}
              disabled={loading}
              className="generate-image-btn"
            >
              {loading ? "Generating Image..." : "Generate Image from Script"}
            </button>
          </div>
        )}

        {loading && (
          <div className="loading">
            <p>Creating your image... {progress}% complete</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {frames.length > 0 && (
          <div className="animation-output">
            <h2>Your Generated Image</h2>
            <div className="frames-container">
              {frames.map((frame, index) => (
                <img
                  key={index}
                  src={frame}
                  alt={`Generated frame ${index + 1}`}
                  className="animation-frame"
                />
              ))}
            </div>
            {imageUrl && (
              <>
                <button
                  onClick={generateVideo}
                  disabled={videoLoading}
                  className="generate-video-btn"
                >
                  {videoLoading ? "Generating Video..." : "Generate Video"}
                </button>
              </>
            )}
          </div>
        )}

        {/* Video generation status section */}
        {videoLoading && (
          <div className="video-status-section">
            <h3>Video Generation Status</h3>
            {videoUuid && <p>Request ID: {videoUuid}</p>}
            {!videoStatus && <p>Waiting for processing to begin...</p>}
            {videoStatus && (
              <div className="status-info">
                <p>Status: {videoStatus.status || "Processing"}</p>
                {videoStatus.progress !== undefined && (
                  <>
                    <p>Progress: {Math.round(videoStatus.progress * 100)}%</p>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${videoStatus.progress * 100}%` }}
                      ></div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        )}

        {videoError && (
          <div className="error-message">
            <p>Error: {videoError}</p>
          </div>
        )}

        {videoUrl && (
          <div className="video-result">
            <h3>Your Generated Video</h3>
            <video controls width="100%" src={videoUrl} style={{marginBottom: 10}}>
              Your browser does not support the video tag.
            </video>
            <a
              href={videoUrl}
              type="button"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              Download Video
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
