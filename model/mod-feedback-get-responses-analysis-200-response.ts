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
import { ModFeedbackGetResponsesAnalysis200ResponseAnonattemptsInner } from './mod-feedback-get-responses-analysis-200-response-anonattempts-inner';
import { ModFeedbackGetResponsesAnalysis200ResponseAttemptsInner } from './mod-feedback-get-responses-analysis-200-response-attempts-inner';


export interface ModFeedbackGetResponsesAnalysis200Response { 
    Anonattempts: Array<ModFeedbackGetResponsesAnalysis200ResponseAnonattemptsInner>;
    Attempts: Array<ModFeedbackGetResponsesAnalysis200ResponseAttemptsInner>;
    /**
     * Total anonymous responses count.
     */
    Totalanonattempts: number;
    /**
     * Total responses count.
     */
    Totalattempts: number;
    Warnings?: Array<AuthEmailSignupUser200ResponseWarningsInner>;
}

