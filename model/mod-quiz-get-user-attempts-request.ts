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


export interface ModQuizGetUserAttemptsRequest { 
    /**
     * whether to include previews or not
     */
    Includepreviews?: boolean;
    /**
     * quiz instance id
     */
    Quizid: number;
    /**
     * quiz status: all, finished or unfinished
     */
    Status?: string;
    /**
     * user id, empty for current user
     */
    Userid?: number;
}
