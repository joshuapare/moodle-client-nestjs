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
import { ModAssignGetSubmissionStatus200ResponseLastattemptSubmission } from './mod-assign-get-submission-status-200-response-lastattempt-submission';
import { ModAssignGetSubmissionStatus200ResponseLastattemptTeamsubmission } from './mod-assign-get-submission-status-200-response-lastattempt-teamsubmission';


export interface ModAssignGetSubmissionStatus200ResponseLastattempt { 
    /**
     * Whether blind marking is enabled.
     */
    Blindmarking: boolean;
    /**
     * Whether the user can edit the current submission.
     */
    Canedit: boolean;
    /**
     * Whether the owner of the submission can edit it.
     */
    Caneditowner: boolean;
    /**
     * Whether the user can submit.
     */
    Cansubmit: boolean;
    /**
     * Extension due date.
     */
    Extensionduedate: number;
    /**
     * Whether the submission is graded.
     */
    Graded: boolean;
    /**
     * Grading status.
     */
    Gradingstatus: string;
    /**
     * Whether new submissions are locked.
     */
    Locked: boolean;
    Submission?: ModAssignGetSubmissionStatus200ResponseLastattemptSubmission;
    /**
     * The submission group id (for group submissions only).
     */
    Submissiongroup?: number;
    Submissiongroupmemberswhoneedtosubmit?: Array<object>;
    /**
     * Whether submissions are enabled or not.
     */
    Submissionsenabled: boolean;
    Teamsubmission?: ModAssignGetSubmissionStatus200ResponseLastattemptTeamsubmission;
    /**
     * Time limit for submission.
     */
    Timelimit?: number;
    Usergroups: Array<object>;
}

