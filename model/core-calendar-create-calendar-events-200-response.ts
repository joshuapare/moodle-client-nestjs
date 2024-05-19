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
import { CoreCalendarCreateCalendarEvents200ResponseEventsInner } from './core-calendar-create-calendar-events-200-response-events-inner';


export interface CoreCalendarCreateCalendarEvents200Response { 
    Events: Array<CoreCalendarCreateCalendarEvents200ResponseEventsInner>;
    Warnings?: Array<AuthEmailSignupUser200ResponseWarningsInner>;
}
