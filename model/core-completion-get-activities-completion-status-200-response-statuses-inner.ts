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
import { CoreCompletionGetActivitiesCompletionStatus200ResponseStatusesInnerDetailsInner } from './core-completion-get-activities-completion-status-200-response-statuses-inner-details-inner';


/**
 * Activity
 */
export interface CoreCompletionGetActivitiesCompletionStatus200ResponseStatusesInner { 
    /**
     * course module ID
     */
    Cmid?: number;
    Details?: Array<CoreCompletionGetActivitiesCompletionStatus200ResponseStatusesInnerDetailsInner>;
    /**
     * Whether this activity module has completion enabled
     */
    Hascompletion?: boolean;
    /**
     * instance ID
     */
    Instance?: number;
    /**
     * Whether this activity module instance tracks completion automatically.
     */
    Isautomatic?: boolean;
    /**
     * Whether completion is being tracked for this user.
     */
    Istrackeduser?: boolean;
    /**
     * activity module name
     */
    Modname?: string;
    /**
     * The user id who has overriden the status, or null
     */
    Overrideby?: number;
    /**
     * Completion state value:                                     0 means incomplete,                                     1 complete,                                     2 complete pass,                                     3 complete fail
     */
    State?: number;
    /**
     * timestamp for completed activity
     */
    Timecompleted?: number;
    /**
     * type of tracking:                                     0 means none,                                     1 manual,                                     2 automatic
     */
    Tracking?: number;
    /**
     * Whether this activity is visible to the user.
     */
    Uservisible?: boolean;
    /**
     * Whether the completion status affects the availability of another activity.
     */
    Valueused?: boolean;
}

