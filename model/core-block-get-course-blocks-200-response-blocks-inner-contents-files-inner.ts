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


/**
 * File.
 */
export interface CoreBlockGetCourseBlocks200ResponseBlocksInnerContentsFilesInner { 
    /**
     * File name.
     */
    Filename?: string;
    /**
     * File path.
     */
    Filepath?: string;
    /**
     * File size.
     */
    Filesize?: number;
    /**
     * Downloadable file url.
     */
    Fileurl?: string;
    /**
     * Whether is an external file.
     */
    Isexternalfile?: boolean;
    /**
     * File mime type.
     */
    Mimetype?: string;
    /**
     * The repository type for external files.
     */
    Repositorytype?: string;
    /**
     * Time modified.
     */
    Timemodified?: number;
}

