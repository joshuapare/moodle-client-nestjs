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
import { ModDataGetMappingInformation200ResponseData } from './mod-data-get-mapping-information-200-response-data';
import { AuthEmailSignupUser200ResponseWarningsInner } from './auth-email-signup-user-200-response-warnings-inner';


export interface ModDataGetMappingInformation200Response { 
    Data?: ModDataGetMappingInformation200ResponseData;
    Warnings?: Array<AuthEmailSignupUser200ResponseWarningsInner>;
}
