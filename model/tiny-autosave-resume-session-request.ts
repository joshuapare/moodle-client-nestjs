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


export interface TinyAutosaveResumeSessionRequest { 
    /**
     * The context id that owns the editor
     */
    Contextid: number;
    /**
     * The new draft item id to resume files to
     */
    Draftid: number;
    /**
     * The ID of the element
     */
    Elementid: string;
    /**
     * The page hash
     */
    Pagehash: string;
    /**
     * The page instance
     */
    Pageinstance: string;
}

