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
import { ModChoiceSubmitChoiceResponse200ResponseAnswersInner } from './mod-choice-submit-choice-response-200-response-answers-inner';
import { AuthEmailSignupUser200ResponseWarningsInner } from './auth-email-signup-user-200-response-warnings-inner';


export interface ModChoiceSubmitChoiceResponse200Response { 
    Answers: Array<ModChoiceSubmitChoiceResponse200ResponseAnswersInner>;
    Warnings?: Array<AuthEmailSignupUser200ResponseWarningsInner>;
}

