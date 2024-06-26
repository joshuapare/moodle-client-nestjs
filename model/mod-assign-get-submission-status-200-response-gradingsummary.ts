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


export interface ModAssignGetSubmissionStatus200ResponseGradingsummary { 
    /**
     * Number of users who can submit.
     */
    Participantcount: number;
    /**
     * Number of submissions in draft status.
     */
    Submissiondraftscount: number;
    /**
     * Whether submissions are enabled or not.
     */
    Submissionsenabled: boolean;
    /**
     * Number of submissions that need grading.
     */
    Submissionsneedgradingcount: number;
    /**
     * Number of submissions in submitted status.
     */
    Submissionssubmittedcount: number;
    /**
     * Whether we need to warn people that there                                                                         are users without groups (\'warningrequired\'), warn                                                                         people there are users who will submit in the default                                                                         group (\'warningoptional\') or no warning (\'\').
     */
    Warnofungroupedusers: string;
}

