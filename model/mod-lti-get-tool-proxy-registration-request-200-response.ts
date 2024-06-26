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


export interface ModLtiGetToolProxyRegistrationRequest200Response { 
    /**
     * URL to redirect on registration completion
     */
    LaunchPresentationReturnUrl: string;
    /**
     * LTI message type
     */
    LtiMessageType: string;
    /**
     * LTI version
     */
    LtiVersion: string;
    /**
     * Tool proxy registration key
     */
    RegKey: string;
    /**
     * Tool proxy registration password
     */
    RegPassword: string;
    /**
     * Tool proxy registration url
     */
    RegUrl: string;
    /**
     * Tool consumers profile URL
     */
    TcProfileUrl: string;
}

