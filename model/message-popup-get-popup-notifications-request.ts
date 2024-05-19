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


export interface MessagePopupGetPopupNotificationsRequest { 
    /**
     * the number of results to return
     */
    Limit?: number;
    /**
     * true for ordering by newest first, false for oldest first
     */
    Newestfirst?: boolean;
    /**
     * offset the result set by a given amount
     */
    Offset?: number;
    /**
     * the user id who received the message, 0 for current user
     */
    Useridto: number;
}
