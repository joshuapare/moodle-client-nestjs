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


export interface CoreFilesGetFilesRequest { 
    /**
     * component
     */
    Component: string;
    /**
     * context id Set to -1 to use contextlevel and instanceid.
     */
    Contextid: number;
    /**
     * The context level for the file location.
     */
    Contextlevel?: string;
    /**
     * file area
     */
    Filearea: string;
    /**
     * file name
     */
    Filename: string;
    /**
     * file path
     */
    Filepath: string;
    /**
     * The instance id for where the file is located.
     */
    Instanceid?: number;
    /**
     * associated id
     */
    Itemid: number;
    /**
     * timestamp to return files changed after this time.
     */
    Modified?: number;
}
