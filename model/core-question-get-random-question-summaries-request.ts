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


export interface CoreQuestionGetRandomQuestionSummariesRequest { 
    /**
     * Category id to find random questions
     */
    Categoryid: number;
    /**
     * Context id that the questions will be rendered in (used for exporting)
     */
    Contextid: number;
    /**
     * Include the subcategories in the search
     */
    Includesubcategories: boolean;
    /**
     * Maximum number of results to return
     */
    Limit?: number;
    /**
     * Number of items to skip from the begging of the result set
     */
    Offset?: number;
    Tagids: Array<object>;
}

