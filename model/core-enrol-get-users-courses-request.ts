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


export interface CoreEnrolGetUsersCoursesRequest { 
    /**
     * Include count of enrolled users for each course? This can add several seconds to the response time if a user is on several large courses, so set this to false if the value will not be used to improve performance.
     */
    Returnusercount?: boolean;
    /**
     * user id
     */
    Userid: number;
}

