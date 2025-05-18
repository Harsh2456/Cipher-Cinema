declare const ExtendVideoRunwayExtendPost: {
    readonly body: {
        readonly properties: {
            readonly uuid: {
                readonly type: "string";
                readonly minLength: 1;
                readonly title: "Uuid";
                readonly description: "The UUID cannot be empty.";
                readonly default: "2858de6f-364c-481e-988a-b930af469aa9";
            };
            readonly model: {
                readonly type: "string";
                readonly pattern: "^(gen2|gen3)$";
                readonly title: "Model";
                readonly default: "gen3";
            };
            readonly text_prompt: {
                readonly type: "string";
                readonly title: "Text Prompt";
            };
            readonly motion: {
                readonly type: "integer";
                readonly title: "Motion";
                readonly default: 5;
            };
            readonly seed: {
                readonly type: "integer";
                readonly title: "Seed";
            };
            readonly callback_url: {
                readonly type: "string";
                readonly title: "Callback Url";
            };
        };
        readonly type: "object";
        readonly title: "ExtendTaskOptions";
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "422": {
            readonly properties: {
                readonly detail: {
                    readonly items: {
                        readonly properties: {
                            readonly loc: {
                                readonly items: {
                                    readonly anyOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "integer";
                                    }];
                                };
                                readonly type: "array";
                                readonly title: "Location";
                            };
                            readonly msg: {
                                readonly type: "string";
                                readonly title: "Message";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly title: "Error Type";
                            };
                        };
                        readonly type: "object";
                        readonly required: readonly ["loc", "msg", "type"];
                        readonly title: "ValidationError";
                    };
                    readonly type: "array";
                    readonly title: "Detail";
                };
            };
            readonly type: "object";
            readonly title: "HTTPValidationError";
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GenerateByImageAndDescriptionRunwayGenerateImageDescriptionPost: {
    readonly body: {
        readonly properties: {
            readonly text_prompt: {
                readonly type: "string";
                readonly minLength: 1;
                readonly title: "Text Prompt";
                readonly description: "The prompt text cannot be empty.";
                readonly default: "ocean";
            };
            readonly model: {
                readonly type: "string";
                readonly pattern: "^(gen2|gen3)$";
                readonly title: "Model";
                readonly default: "gen3";
            };
            readonly image_as_end_frame: {
                readonly type: "boolean";
                readonly title: "Image As End Frame";
                readonly default: false;
            };
            readonly flip: {
                readonly type: "boolean";
                readonly title: "Flip";
                readonly default: false;
            };
            readonly img_prompt: {
                readonly type: "string";
                readonly title: "Img Prompt";
                readonly default: "https://files.aigen.video/imgs/ocean.jpg";
            };
            readonly motion: {
                readonly type: "integer";
                readonly title: "Motion";
                readonly default: 5;
            };
            readonly seed: {
                readonly type: "integer";
                readonly title: "Seed";
            };
            readonly callback_url: {
                readonly type: "string";
                readonly title: "Callback Url";
            };
            readonly time: {
                readonly type: "integer";
                readonly title: "Time";
                readonly default: 5;
            };
        };
        readonly type: "object";
        readonly title: "ImagePlusDescriptionTaskOptions";
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "422": {
            readonly properties: {
                readonly detail: {
                    readonly items: {
                        readonly properties: {
                            readonly loc: {
                                readonly items: {
                                    readonly anyOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "integer";
                                    }];
                                };
                                readonly type: "array";
                                readonly title: "Location";
                            };
                            readonly msg: {
                                readonly type: "string";
                                readonly title: "Message";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly title: "Error Type";
                            };
                        };
                        readonly type: "object";
                        readonly required: readonly ["loc", "msg", "type"];
                        readonly title: "ValidationError";
                    };
                    readonly type: "array";
                    readonly title: "Detail";
                };
            };
            readonly type: "object";
            readonly title: "HTTPValidationError";
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GenerateByImageRunwayGenerateImagePost: {
    readonly body: {
        readonly properties: {
            readonly img_prompt: {
                readonly type: "string";
                readonly title: "Img Prompt";
                readonly default: "https://files.aigen.video/imgs/ocean.jpg";
            };
            readonly model: {
                readonly type: "string";
                readonly pattern: "^(gen2|gen3)$";
                readonly title: "Model";
                readonly default: "gen3";
            };
            readonly image_as_end_frame: {
                readonly type: "boolean";
                readonly title: "Image As End Frame";
                readonly default: false;
            };
            readonly flip: {
                readonly type: "boolean";
                readonly title: "Flip";
                readonly default: false;
            };
            readonly motion: {
                readonly type: "integer";
                readonly title: "Motion";
                readonly default: 5;
            };
            readonly seed: {
                readonly type: "integer";
                readonly title: "Seed";
            };
            readonly callback_url: {
                readonly type: "string";
                readonly title: "Callback Url";
            };
            readonly time: {
                readonly type: "integer";
                readonly title: "Time";
                readonly default: 5;
            };
        };
        readonly type: "object";
        readonly title: "ImageTaskOptions";
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "422": {
            readonly properties: {
                readonly detail: {
                    readonly items: {
                        readonly properties: {
                            readonly loc: {
                                readonly items: {
                                    readonly anyOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "integer";
                                    }];
                                };
                                readonly type: "array";
                                readonly title: "Location";
                            };
                            readonly msg: {
                                readonly type: "string";
                                readonly title: "Message";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly title: "Error Type";
                            };
                        };
                        readonly type: "object";
                        readonly required: readonly ["loc", "msg", "type"];
                        readonly title: "ValidationError";
                    };
                    readonly type: "array";
                    readonly title: "Detail";
                };
            };
            readonly type: "object";
            readonly title: "HTTPValidationError";
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GenerateByTextRunwayGenerateTextPost: {
    readonly body: {
        readonly properties: {
            readonly text_prompt: {
                readonly type: "string";
                readonly minLength: 1;
                readonly title: "Text Prompt";
                readonly description: "The prompt text cannot be empty.";
                readonly default: "masterpiece, cinematic, man smoking cigarette looking outside window, moving around";
            };
            readonly model: {
                readonly type: "string";
                readonly pattern: "^(gen2|gen3)$";
                readonly title: "Model";
                readonly default: "gen3";
            };
            readonly width: {
                readonly type: "integer";
                readonly title: "Width";
                readonly default: 1344;
            };
            readonly height: {
                readonly type: "integer";
                readonly title: "Height";
                readonly default: 768;
            };
            readonly motion: {
                readonly type: "integer";
                readonly title: "Motion";
                readonly default: 5;
            };
            readonly seed: {
                readonly type: "integer";
                readonly title: "Seed";
            };
            readonly callback_url: {
                readonly type: "string";
                readonly title: "Callback Url";
            };
            readonly time: {
                readonly type: "integer";
                readonly title: "Time";
                readonly default: 5;
            };
        };
        readonly type: "object";
        readonly title: "TextTaskOptions";
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "422": {
            readonly properties: {
                readonly detail: {
                    readonly items: {
                        readonly properties: {
                            readonly loc: {
                                readonly items: {
                                    readonly anyOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "integer";
                                    }];
                                };
                                readonly type: "array";
                                readonly title: "Location";
                            };
                            readonly msg: {
                                readonly type: "string";
                                readonly title: "Message";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly title: "Error Type";
                            };
                        };
                        readonly type: "object";
                        readonly required: readonly ["loc", "msg", "type"];
                        readonly title: "ValidationError";
                    };
                    readonly type: "array";
                    readonly title: "Detail";
                };
            };
            readonly type: "object";
            readonly title: "HTTPValidationError";
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GenerateByVideoRunwayGenerateVideoPost: {
    readonly body: {
        readonly properties: {
            readonly text_prompt: {
                readonly type: "string";
                readonly minLength: 1;
                readonly title: "Text Prompt";
                readonly description: "The prompt text cannot be empty.";
                readonly default: "Space travel";
            };
            readonly video_prompt: {
                readonly type: "string";
                readonly minLength: 1;
                readonly title: "Video Prompt";
                readonly description: "URL of the video prompt";
            };
            readonly structure_transformation: {
                readonly type: "number";
                readonly maximum: 1;
                readonly minimum: 0;
                readonly title: "Structure Transformation";
                readonly description: "Structure transformation value between 0 and 1";
                readonly default: 0.5;
            };
            readonly seed: {
                readonly type: "integer";
                readonly title: "Seed";
                readonly description: "Seed for randomization";
            };
            readonly callback_url: {
                readonly type: "string";
                readonly title: "Callback Url";
                readonly description: "Callback URL for task completion";
            };
        };
        readonly type: "object";
        readonly title: "GenerateVideoOptions";
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "422": {
            readonly properties: {
                readonly detail: {
                    readonly items: {
                        readonly properties: {
                            readonly loc: {
                                readonly items: {
                                    readonly anyOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "integer";
                                    }];
                                };
                                readonly type: "array";
                                readonly title: "Location";
                            };
                            readonly msg: {
                                readonly type: "string";
                                readonly title: "Message";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly title: "Error Type";
                            };
                        };
                        readonly type: "object";
                        readonly required: readonly ["loc", "msg", "type"];
                        readonly title: "ValidationError";
                    };
                    readonly type: "array";
                    readonly title: "Detail";
                };
            };
            readonly type: "object";
            readonly title: "HTTPValidationError";
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GetTaskStatusRunwayStatusGet: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly uuid: {
                    readonly type: "string";
                    readonly title: "The UUID of the task";
                    readonly default: "2858de6f-364c-481e-988a-b930af469aa9";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "422": {
            readonly properties: {
                readonly detail: {
                    readonly items: {
                        readonly properties: {
                            readonly loc: {
                                readonly items: {
                                    readonly anyOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "integer";
                                    }];
                                };
                                readonly type: "array";
                                readonly title: "Location";
                            };
                            readonly msg: {
                                readonly type: "string";
                                readonly title: "Message";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly title: "Error Type";
                            };
                        };
                        readonly type: "object";
                        readonly required: readonly ["loc", "msg", "type"];
                        readonly title: "ValidationError";
                    };
                    readonly type: "array";
                    readonly title: "Detail";
                };
            };
            readonly type: "object";
            readonly title: "HTTPValidationError";
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
export { ExtendVideoRunwayExtendPost, GenerateByImageAndDescriptionRunwayGenerateImageDescriptionPost, GenerateByImageRunwayGenerateImagePost, GenerateByTextRunwayGenerateTextPost, GenerateByVideoRunwayGenerateVideoPost, GetTaskStatusRunwayStatusGet };
