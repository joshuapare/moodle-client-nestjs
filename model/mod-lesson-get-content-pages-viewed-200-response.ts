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
import { ModLessonGetContentPagesViewed200ResponsePagesInner } from './mod-lesson-get-content-pages-viewed-200-response-pages-inner';


export interface ModLessonGetContentPagesViewed200Response { 
    Pages: Array<ModLessonGetContentPagesViewed200ResponsePagesInner>;
    Warnings?: Array<AuthEmailSignupUser200ResponseWarningsInner>;
}

