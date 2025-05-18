import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';
class SDK {
    constructor() {
        this.spec = Oas.init(definition);
        this.core = new APICore(this.spec, 'aivideoapi/0.1.0 (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config) {
        this.core.setConfig(config);
    }
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values) {
        this.core.setAuth(...values);
        return this;
    }
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url, variables = {}) {
        this.core.setServer(url, variables);
    }
    /**
     * Generate By Text
     *
     * @throws FetchError<422, types.GenerateByTextRunwayGenerateTextPostResponse422> Validation Error
     */
    generate_by_text_runway_generate_text_post(body) {
        return this.core.fetch('/runway/generate/text', 'post', body);
    }
    /**
     * Generate By Image
     *
     * @throws FetchError<422, types.GenerateByImageRunwayGenerateImagePostResponse422> Validation Error
     */
    generate_by_image_runway_generate_image_post(body) {
        return this.core.fetch('/runway/generate/image', 'post', body);
    }
    /**
     * Generate By Image And Description
     *
     * @throws FetchError<422, types.GenerateByImageAndDescriptionRunwayGenerateImageDescriptionPostResponse422> Validation Error
     */
    generate_by_image_and_description_runway_generate_imageDescription_post(body) {
        return this.core.fetch('/runway/generate/imageDescription', 'post', body);
    }
    /**
     * Generate By Video
     *
     * @throws FetchError<422, types.GenerateByVideoRunwayGenerateVideoPostResponse422> Validation Error
     */
    generate_by_video_runway_generate_video_post(body) {
        return this.core.fetch('/runway/generate/video', 'post', body);
    }
    /**
     * Extend Video
     *
     * @throws FetchError<422, types.ExtendVideoRunwayExtendPostResponse422> Validation Error
     */
    extend_video_runway_extend_post(body) {
        return this.core.fetch('/runway/extend', 'post', body);
    }
    /**
     * Get Task Status
     *
     * @throws FetchError<422, types.GetTaskStatusRunwayStatusGetResponse422> Validation Error
     */
    get_task_status_runway_status_get(metadata) {
        return this.core.fetch('/status', 'get', metadata);
    }
}
const createSDK = (() => { return new SDK(); })();
export default createSDK;
