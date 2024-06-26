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


export interface CoreGroupGetCourseUserGroups200ResponseGroupsInner { 
    /**
     * course id
     */
    Courseid?: number;
    /**
     * group description text
     */
    Description?: string;
    /**
     * description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN)
     */
    Descriptionformat?: number;
    /**
     * group record id
     */
    Id?: number;
    /**
     * id number
     */
    Idnumber?: string;
    /**
     * group name
     */
    Name?: string;
}

