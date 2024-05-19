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
import { ModAssignGetSubmissions200ResponseAssignmentsInnerSubmissionsInner } from './mod-assign-get-submissions-200-response-assignments-inner-submissions-inner';


export interface ModAssignGetSubmissions200ResponseAssignmentsInner { 
    /**
     * assignment id
     */
    Assignmentid?: number;
    Submissions?: Array<ModAssignGetSubmissions200ResponseAssignmentsInnerSubmissionsInner>;
}

