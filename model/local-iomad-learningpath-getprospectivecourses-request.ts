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


export interface LocalIomadLearningpathGetprospectivecoursesRequest { 
    /**
     * Show only courses in this category (and children)
     */
    Category?: number;
    /**
     * Filter course list returned
     */
    Filter?: string;
    /**
     * ID of (target) learning path
     */
    Pathid: number;
    /**
     * Show only courses assigned to this program license
     */
    Program?: number;
}

