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


export interface ModQuizGetQuizAccessInformation200Response { 
    Accessrules: Array<object>;
    Activerulenames: Array<object>;
    /**
     * Whether the user can do the quiz or not.
     */
    Canattempt: boolean;
    /**
     * Whether the user can edit the quiz settings or not.
     */
    Canmanage: boolean;
    /**
     * Whether the user can preview the quiz or not.
     */
    Canpreview: boolean;
    /**
     * Whether the users can review their previous attempts                                                                 or not.
     */
    Canreviewmyattempts: boolean;
    /**
     * Whether the user can view the quiz reports or not.
     */
    Canviewreports: boolean;
    Preventaccessreasons: Array<object>;
    Warnings?: Array<AuthEmailSignupUser200ResponseWarningsInner>;
}
