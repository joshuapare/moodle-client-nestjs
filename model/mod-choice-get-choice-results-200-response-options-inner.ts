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
import { ModChoiceGetChoiceResults200ResponseOptionsInnerUserresponsesInner } from './mod-choice-get-choice-results-200-response-options-inner-userresponses-inner';


/**
 * Options
 */
export interface ModChoiceGetChoiceResults200ResponseOptionsInner { 
    /**
     * choice instance id
     */
    Id?: number;
    /**
     * maximum number of answers
     */
    Maxanswer?: number;
    /**
     * number of users answers
     */
    Numberofuser?: number;
    /**
     * percentage of users answers
     */
    Percentageamount?: number;
    /**
     * text of the choice
     */
    Text?: string;
    Userresponses?: Array<ModChoiceGetChoiceResults200ResponseOptionsInnerUserresponsesInner>;
}

