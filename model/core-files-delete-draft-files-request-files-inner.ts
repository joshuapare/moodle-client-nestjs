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


export interface CoreFilesDeleteDraftFilesRequestFilesInner { 
    /**
     * Name of the file to delete.
     */
    Filename?: string;
    /**
     * Path to the file or directory to delete.
     */
    Filepath?: string;
}

