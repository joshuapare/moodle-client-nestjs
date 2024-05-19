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
import { ModAssignGetSubmissionStatus200ResponseLastattemptSubmissionPluginsInner } from './mod-assign-get-submission-status-200-response-lastattempt-submission-plugins-inner';
import { ModAssignGetSubmissionStatus200ResponseLastattemptTeamsubmission } from './mod-assign-get-submission-status-200-response-lastattempt-teamsubmission';
import { ModAssignGetSubmissionStatus200ResponseFeedbackGrade } from './mod-assign-get-submission-status-200-response-feedback-grade';


export interface ModAssignGetSubmissionStatus200ResponsePreviousattemptsInner { 
    /**
     * Attempt number.
     */
    Attemptnumber?: number;
    Feedbackplugins?: Array<ModAssignGetSubmissionStatus200ResponseLastattemptSubmissionPluginsInner>;
    Grade?: ModAssignGetSubmissionStatus200ResponseFeedbackGrade;
    Submission?: ModAssignGetSubmissionStatus200ResponseLastattemptTeamsubmission;
}

