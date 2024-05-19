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


export interface ModChatGetChatLatestMessages200ResponseMessagesInner { 
    /**
     * message id
     */
    Id?: number;
    /**
     * message text
     */
    Message?: string;
    /**
     * true if is a system message (like user joined)
     */
    System?: boolean;
    /**
     * timestamp for the message
     */
    Timestamp?: number;
    /**
     * user id
     */
    Userid?: number;
}
