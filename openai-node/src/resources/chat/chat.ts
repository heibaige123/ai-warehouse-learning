// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as CompletionsAPI from './completions/completions';
import {
  ChatCompletion,
  ChatCompletionAllowedToolChoice,
  ChatCompletionAllowedTools,
  ChatCompletionAssistantMessageParam,
  ChatCompletionAudio,
  ChatCompletionAudioParam,
  ChatCompletionChunk,
  ChatCompletionContentPart,
  ChatCompletionContentPartImage,
  ChatCompletionContentPartInputAudio,
  ChatCompletionContentPartRefusal,
  ChatCompletionContentPartText,
  ChatCompletionCreateParams,
  ChatCompletionCreateParamsNonStreaming,
  ChatCompletionCreateParamsStreaming,
  ChatCompletionCustomTool,
  ChatCompletionDeleted,
  ChatCompletionDeveloperMessageParam,
  ChatCompletionFunctionCallOption,
  ChatCompletionFunctionMessageParam,
  ChatCompletionFunctionTool,
  ChatCompletionListParams,
  ChatCompletionMessage,
  ChatCompletionMessageCustomToolCall,
  ChatCompletionMessageFunctionToolCall,
  ChatCompletionMessageParam,
  ChatCompletionMessageToolCall,
  ChatCompletionModality,
  ChatCompletionNamedToolChoice,
  ChatCompletionNamedToolChoiceCustom,
  ChatCompletionPredictionContent,
  ChatCompletionReasoningEffort,
  ChatCompletionRole,
  ChatCompletionStoreMessage,
  ChatCompletionStreamOptions,
  ChatCompletionSystemMessageParam,
  ChatCompletionTokenLogprob,
  ChatCompletionTool,
  ChatCompletionToolChoiceOption,
  ChatCompletionToolMessageParam,
  ChatCompletionUpdateParams,
  ChatCompletionUserMessageParam,
  ChatCompletionsPage,
  Completions,
} from './completions/completions';

export class Chat extends APIResource {
  completions: CompletionsAPI.Completions = new CompletionsAPI.Completions(this._client);
}

export type ChatModel = Shared.ChatModel;

Chat.Completions = Completions;

export declare namespace Chat {
  export { ChatModel };

  export {
    Completions,
    ChatCompletion,
    ChatCompletionAllowedToolChoice,
    ChatCompletionAssistantMessageParam,
    ChatCompletionAudio,
    ChatCompletionAudioParam,
    ChatCompletionChunk,
    ChatCompletionContentPart,
    ChatCompletionContentPartImage,
    ChatCompletionContentPartInputAudio,
    ChatCompletionContentPartRefusal,
    ChatCompletionContentPartText,
    ChatCompletionCustomTool,
    ChatCompletionDeleted,
    ChatCompletionDeveloperMessageParam,
    ChatCompletionFunctionCallOption,
    ChatCompletionFunctionMessageParam,
    ChatCompletionFunctionTool,
    ChatCompletionMessage,
    ChatCompletionMessageCustomToolCall,
    ChatCompletionMessageFunctionToolCall,
    ChatCompletionMessageParam,
    ChatCompletionMessageToolCall,
    ChatCompletionModality,
    ChatCompletionNamedToolChoice,
    ChatCompletionNamedToolChoiceCustom,
    ChatCompletionPredictionContent,
    ChatCompletionRole,
    ChatCompletionStoreMessage,
    ChatCompletionStreamOptions,
    ChatCompletionSystemMessageParam,
    ChatCompletionTokenLogprob,
    ChatCompletionTool,
    ChatCompletionToolChoiceOption,
    ChatCompletionToolMessageParam,
    ChatCompletionUserMessageParam,
    ChatCompletionAllowedTools,
    ChatCompletionReasoningEffort,
    ChatCompletionsPage,
    ChatCompletionCreateParams,
    ChatCompletionCreateParamsNonStreaming,
    ChatCompletionCreateParamsStreaming,
    ChatCompletionUpdateParams,
    ChatCompletionListParams,
  };
}
