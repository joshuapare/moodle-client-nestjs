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
import { ModAssignGetAssignments200ResponseCoursesInner } from './mod-assign-get-assignments-200-response-courses-inner';
import { ModAssignGetAssignments200ResponseWarningsInner } from './mod-assign-get-assignments-200-response-warnings-inner';


export interface ModAssignGetAssignments200Response { 
    Courses: Array<ModAssignGetAssignments200ResponseCoursesInner>;
    Warnings?: Array<ModAssignGetAssignments200ResponseWarningsInner>;
}

