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
import { ModH5pactivityGetResults200ResponseAttemptsInnerResultsInner } from './mod-h5pactivity-get-results-200-response-attempts-inner-results-inner';


/**
 * The attempt general information
 */
export interface ModH5pactivityGetResults200ResponseAttemptsInner { 
    /**
     * Attempt number
     */
    Attempt?: number;
    /**
     * Attempt completion
     */
    Completion?: number;
    /**
     * Attempt duration in seconds
     */
    Duration?: number;
    /**
     * ID of the H5P activity
     */
    H5pactivityid?: number;
    /**
     * ID of the context
     */
    Id?: number;
    /**
     * Attempt max score
     */
    Maxscore?: number;
    /**
     * Attempt score value
     */
    Rawscore?: number;
    Results?: Array<ModH5pactivityGetResults200ResponseAttemptsInnerResultsInner>;
    /**
     * Attempt scaled
     */
    Scaled?: number;
    /**
     * Attempt success
     */
    Success?: number;
    /**
     * Attempt creation
     */
    Timecreated?: number;
    /**
     * Attempt modified
     */
    Timemodified?: number;
    /**
     * ID of the user
     */
    Userid?: number;
}

