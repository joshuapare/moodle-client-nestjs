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


export interface CoreUserUpdateUserPreferencesRequestPreferencesInner { 
    /**
     * The name of the preference
     */
    Type?: string;
    /**
     * The value of the preference, do not set this field if you                                 want to remove (unset) the current value.
     */
    Value?: string;
}

