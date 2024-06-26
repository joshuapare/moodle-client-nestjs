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
import { CoreMessageGetConversation200ResponseMembersInnerContactrequestsInner } from './core-message-get-conversation-200-response-members-inner-contactrequests-inner';
import { CoreMessageGetConversation200ResponseMembersInnerConversationsInner } from './core-message-get-conversation-200-response-members-inner-conversations-inner';


export interface CoreMessageGetConversation200ResponseMembersInner { 
    /**
     * If the user can be messaged
     */
    Canmessage?: boolean;
    /**
     * If the user can still message even if they get blocked
     */
    Canmessageevenifblocked?: boolean;
    Contactrequests?: Array<CoreMessageGetConversation200ResponseMembersInnerContactrequestsInner>;
    Conversations?: Array<CoreMessageGetConversation200ResponseMembersInnerConversationsInner>;
    /**
     * The user\'s name
     */
    Fullname?: string;
    /**
     * The user id
     */
    Id?: number;
    /**
     * If the user has been blocked
     */
    Isblocked?: boolean;
    /**
     * Is the user a contact?
     */
    Iscontact?: boolean;
    /**
     * Is the user deleted?
     */
    Isdeleted?: boolean;
    /**
     * The user\'s online status
     */
    Isonline?: boolean;
    /**
     * User picture URL
     */
    Profileimageurl?: string;
    /**
     * Small user picture URL
     */
    Profileimageurlsmall?: string;
    /**
     * The link to the user\'s profile page
     */
    Profileurl?: string;
    /**
     * If the user requires to be contacts
     */
    Requirescontact?: boolean;
    /**
     * Show the user\'s online status?
     */
    Showonlinestatus?: boolean;
}

