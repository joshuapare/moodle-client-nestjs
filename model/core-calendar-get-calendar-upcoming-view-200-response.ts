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
import { CoreCalendarGetCalendarMonthlyView200ResponseWeeksInnerDaysInnerEventsInner } from './core-calendar-get-calendar-monthly-view-200-response-weeks-inner-days-inner-events-inner';
import { CoreCalendarGetCalendarDayView200ResponseNextperiod } from './core-calendar-get-calendar-day-view-200-response-nextperiod';


export interface CoreCalendarGetCalendarUpcomingView200Response { 
    /**
     * categoryid
     */
    Categoryid?: number;
    /**
     * courseid
     */
    Courseid: number;
    Date: CoreCalendarGetCalendarDayView200ResponseNextperiod;
    /**
     * defaulteventcontext
     */
    Defaulteventcontext: number;
    Events: Array<CoreCalendarGetCalendarMonthlyView200ResponseWeeksInnerDaysInnerEventsInner>;
    /**
     * filter_selector
     */
    FilterSelector: string;
    /**
     * isloggedin
     */
    Isloggedin: boolean;
}

