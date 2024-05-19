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


export interface CoreMessageGetConversation200ResponseMessagesInner { 
    /**
     * The id of the message
     */
    Id?: number;
    /**
     * The text of the message
     */
    Text?: string;
    /**
     * The timecreated timestamp for the message
     */
    Timecreated?: number;
    /**
     * The id of the user who sent the message
     */
    Useridfrom?: number;
}

