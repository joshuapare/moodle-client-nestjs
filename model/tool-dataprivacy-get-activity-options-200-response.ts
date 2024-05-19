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
import { ToolDataprivacyGetActivityOptions200ResponseOptionsInner } from './tool-dataprivacy-get-activity-options-200-response-options-inner';
import { AuthEmailSignupUser200ResponseWarningsInner } from './auth-email-signup-user-200-response-warnings-inner';


export interface ToolDataprivacyGetActivityOptions200Response { 
    Options: Array<ToolDataprivacyGetActivityOptions200ResponseOptionsInner>;
    Warnings?: Array<AuthEmailSignupUser200ResponseWarningsInner>;
}

