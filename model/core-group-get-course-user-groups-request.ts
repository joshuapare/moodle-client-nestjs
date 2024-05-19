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


export interface CoreGroupGetCourseUserGroupsRequest { 
    /**
     * Id of course (empty or 0 for all the courses where the user is enrolled).
     */
    Courseid?: number;
    /**
     * returns only groups in the specified grouping
     */
    Groupingid?: number;
    /**
     * Id of user (empty or 0 for current user).
     */
    Userid?: number;
}
