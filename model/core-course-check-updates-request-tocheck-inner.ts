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


export interface CoreCourseCheckUpdatesRequestTocheckInner { 
    /**
     * The context level for the file location.                                                                                 Only module supported right now.
     */
    Contextlevel?: string;
    /**
     * Context instance id
     */
    Id?: number;
    /**
     * Check updates since this time stamp
     */
    Since?: number;
}

