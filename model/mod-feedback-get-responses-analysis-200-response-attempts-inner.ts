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
import { ModFeedbackGetResponsesAnalysis200ResponseAttemptsInnerResponsesInner } from './mod-feedback-get-responses-analysis-200-response-attempts-inner-responses-inner';


export interface ModFeedbackGetResponsesAnalysis200ResponseAttemptsInner { 
    /**
     * Course id
     */
    Courseid?: number;
    /**
     * User full name
     */
    Fullname?: string;
    /**
     * Completed id
     */
    Id?: number;
    Responses?: Array<ModFeedbackGetResponsesAnalysis200ResponseAttemptsInnerResponsesInner>;
    /**
     * Time modified for the response
     */
    Timemodified?: number;
    /**
     * User who responded
     */
    Userid?: number;
}

