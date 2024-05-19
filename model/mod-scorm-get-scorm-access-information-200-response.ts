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


export interface ModScormGetScormAccessInformation200Response { 
    /**
     * Whether the user has the capability mod/scorm:addinstance allowed.
     */
    Canaddinstance?: boolean;
    /**
     * Whether the user has the capability mod/scorm:deleteownresponses allowed.
     */
    Candeleteownresponses?: boolean;
    /**
     * Whether the user has the capability mod/scorm:deleteresponses allowed.
     */
    Candeleteresponses?: boolean;
    /**
     * Whether the user has the capability mod/scorm:savetrack allowed.
     */
    Cansavetrack?: boolean;
    /**
     * Whether the user has the capability mod/scorm:skipview allowed.
     */
    Canskipview?: boolean;
    /**
     * Whether the user has the capability mod/scorm:viewreport allowed.
     */
    Canviewreport?: boolean;
    /**
     * Whether the user has the capability mod/scorm:viewscores allowed.
     */
    Canviewscores?: boolean;
    Warnings?: Array<AuthEmailSignupUser200ResponseWarningsInner>;
}
