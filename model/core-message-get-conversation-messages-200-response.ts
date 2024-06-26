/**
 * Moodle Webservice API
 * Auto-generated OpenAPI spec for Moodle\'s Webservice API. Requires installation of the Catalyst RESTful API plugin: https://github.com/catalyst/moodle-webservice_restful.
 *
 * The version of the OpenAPI document: 4.3.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CoreMessageGetConversationBetweenUsers200ResponseMembersInner } from './core-message-get-conversation-between-users-200-response-members-inner';
import { CoreMessageGetConversationBetweenUsers200ResponseMessagesInner } from './core-message-get-conversation-between-users-200-response-messages-inner';


export interface CoreMessageGetConversationMessages200Response { 
    /**
     * The conversation id
     */
    Id: number;
    Members: Array<CoreMessageGetConversationBetweenUsers200ResponseMembersInner>;
    Messages: Array<CoreMessageGetConversationBetweenUsers200ResponseMessagesInner>;
}

