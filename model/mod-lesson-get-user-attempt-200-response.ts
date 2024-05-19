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
import { ModLessonGetUserAttempt200ResponseAnswerpagesInner } from './mod-lesson-get-user-attempt-200-response-answerpages-inner';
import { AuthEmailSignupUser200ResponseWarningsInner } from './auth-email-signup-user-200-response-warnings-inner';
import { ModLessonGetUserAttempt200ResponseUserstats } from './mod-lesson-get-user-attempt-200-response-userstats';


export interface ModLessonGetUserAttempt200Response { 
    Answerpages: Array<ModLessonGetUserAttempt200ResponseAnswerpagesInner>;
    Userstats: ModLessonGetUserAttempt200ResponseUserstats;
    Warnings?: Array<AuthEmailSignupUser200ResponseWarningsInner>;
}
