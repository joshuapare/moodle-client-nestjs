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


export interface CoreCommentGetCommentsRequest { 
    /**
     * string comment area
     */
    Area?: string;
    /**
     * component
     */
    Component: string;
    /**
     * contextlevel system, course, user...
     */
    Contextlevel: string;
    /**
     * the Instance id of item associated with the context level
     */
    Instanceid: number;
    /**
     * associated id
     */
    Itemid: number;
    /**
     * page number (0 based)
     */
    Page?: number;
    /**
     * Sort direction: ASC or DESC
     */
    Sortdirection?: string;
}

