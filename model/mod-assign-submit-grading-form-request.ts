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


export interface ModAssignSubmitGradingFormRequest { 
    /**
     * The assignment id to operate on
     */
    Assignmentid: number;
    /**
     * The data from the grading form, encoded as a json array
     */
    Jsonformdata: string;
    /**
     * The user id the submission belongs to
     */
    Userid: number;
}

