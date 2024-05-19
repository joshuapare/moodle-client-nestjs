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
import { ToolDataprivacyGetDataRequest200ResponseResult } from './tool-dataprivacy-get-data-request-200-response-result';


export interface ToolDataprivacyGetDataRequest200Response { 
    Result: ToolDataprivacyGetDataRequest200ResponseResult;
    Warnings?: Array<AuthEmailSignupUser200ResponseWarningsInner>;
}
