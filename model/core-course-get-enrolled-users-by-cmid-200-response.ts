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
import { AuthEmailSignupUser200ResponseWarningsInner } from './auth-email-signup-user-200-response-warnings-inner';
import { CoreCourseGetEnrolledUsersByCmid200ResponseUsersInner } from './core-course-get-enrolled-users-by-cmid-200-response-users-inner';


export interface CoreCourseGetEnrolledUsersByCmid200Response { 
    Users: Array<CoreCourseGetEnrolledUsersByCmid200ResponseUsersInner>;
    Warnings?: Array<AuthEmailSignupUser200ResponseWarningsInner>;
}

