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


export interface ModChatGetSessionMessagesRequest { 
    /**
     * Chat instance id.
     */
    Chatid: number;
    /**
     * Get messages from users in this group.                                                 0 means that the function will determine the user group
     */
    Groupid?: number;
    /**
     * The session end time (timestamp).
     */
    Sessionend: number;
    /**
     * The session start time (timestamp).
     */
    Sessionstart: number;
}

