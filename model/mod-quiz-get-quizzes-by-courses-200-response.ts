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
import { ModQuizGetQuizzesByCourses200ResponseQuizzesInner } from './mod-quiz-get-quizzes-by-courses-200-response-quizzes-inner';


export interface ModQuizGetQuizzesByCourses200Response { 
    Quizzes: Array<ModQuizGetQuizzesByCourses200ResponseQuizzesInner>;
    Warnings?: Array<AuthEmailSignupUser200ResponseWarningsInner>;
}

