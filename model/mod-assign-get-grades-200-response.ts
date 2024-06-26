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
import { ModAssignGetGrades200ResponseWarningsInner } from './mod-assign-get-grades-200-response-warnings-inner';
import { ModAssignGetGrades200ResponseAssignmentsInner } from './mod-assign-get-grades-200-response-assignments-inner';


export interface ModAssignGetGrades200Response { 
    Assignments: Array<ModAssignGetGrades200ResponseAssignmentsInner>;
    Warnings?: Array<ModAssignGetGrades200ResponseWarningsInner>;
}

