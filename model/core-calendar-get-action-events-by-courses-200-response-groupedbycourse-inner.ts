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
import { CoreCalendarGetActionEventsByCourses200ResponseGroupedbycourseInnerEventsInner } from './core-calendar-get-action-events-by-courses-200-response-groupedbycourse-inner-events-inner';


export interface CoreCalendarGetActionEventsByCourses200ResponseGroupedbycourseInner { 
    /**
     * courseid
     */
    Courseid?: number;
    Events?: Array<CoreCalendarGetActionEventsByCourses200ResponseGroupedbycourseInnerEventsInner>;
    /**
     * firstid
     */
    Firstid?: number;
    /**
     * lastid
     */
    Lastid?: number;
}
