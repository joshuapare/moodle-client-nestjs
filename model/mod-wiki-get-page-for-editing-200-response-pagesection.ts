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


export interface ModWikiGetPageForEditing200ResponsePagesection { 
    /**
     * The contents of the page-section to be edited.
     */
    Content?: string;
    /**
     * Format of the original content of the page.
     */
    Contentformat?: string;
    /**
     * Latest version of the page.
     */
    Version: number;
    Warnings?: Array<AuthEmailSignupUser200ResponseWarningsInner>;
}

