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


export interface CoreGradesGraderGradingpanelPointFetchRequest { 
    /**
     * The name of the component
     */
    Component: string;
    /**
     * The ID of the context being graded
     */
    Contextid: number;
    /**
     * The ID of the user show
     */
    Gradeduserid: number;
    /**
     * The grade item itemname being graded
     */
    Itemname: string;
}

