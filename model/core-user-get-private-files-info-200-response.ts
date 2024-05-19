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
import { AuthEmailSignupUser200ResponseWarningsInner } from './auth-email-signup-user-200-response-warnings-inner';


export interface CoreUserGetPrivateFilesInfo200Response { 
    /**
     * Number of files in the area.
     */
    Filecount: number;
    /**
     * Total size of the files in the area.
     */
    Filesize: number;
    /**
     * Total size of the area excluding file references
     */
    Filesizewithoutreferences: number;
    /**
     * Number of folders in the area.
     */
    Foldercount: number;
    Warnings?: Array<AuthEmailSignupUser200ResponseWarningsInner>;
}

