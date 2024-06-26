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
import { CoreCalendarGetCalendarDayView200ResponseNextperiod } from './core-calendar-get-calendar-day-view-200-response-nextperiod';
import { CoreCalendarGetCalendarMonthlyView200ResponseDaynamesInner } from './core-calendar-get-calendar-monthly-view-200-response-daynames-inner';
import { CoreCalendarGetCalendarMonthlyView200ResponseWeeksInner } from './core-calendar-get-calendar-monthly-view-200-response-weeks-inner';


export interface CoreCalendarGetCalendarMonthlyView200Response { 
    /**
     * calendarinstanceid
     */
    Calendarinstanceid: number;
    /**
     * categoryid
     */
    Categoryid?: number;
    /**
     * courseid
     */
    Courseid: number;
    Date: CoreCalendarGetCalendarDayView200ResponseNextperiod;
    Daynames: Array<CoreCalendarGetCalendarMonthlyView200ResponseDaynamesInner>;
    /**
     * defaulteventcontext
     */
    Defaulteventcontext: number;
    /**
     * filter_selector
     */
    FilterSelector?: string;
    /**
     * includenavigation
     */
    Includenavigation: boolean;
    /**
     * initialeventsloaded
     */
    Initialeventsloaded: boolean;
    /**
     * larrow
     */
    Larrow: string;
    Nextperiod: CoreCalendarGetCalendarDayView200ResponseNextperiod;
    /**
     * nextperiodlink
     */
    Nextperiodlink: string;
    /**
     * nextperiodname
     */
    Nextperiodname: string;
    /**
     * periodname
     */
    Periodname: string;
    Previousperiod: CoreCalendarGetCalendarDayView200ResponseNextperiod;
    /**
     * previousperiodlink
     */
    Previousperiodlink: string;
    /**
     * previousperiodname
     */
    Previousperiodname: string;
    /**
     * rarrow
     */
    Rarrow: string;
    /**
     * showviewselector
     */
    Showviewselector: boolean;
    /**
     * url
     */
    Url: string;
    /**
     * view
     */
    View: string;
    /**
     * viewinginblock
     */
    Viewinginblock: boolean;
    /**
     * viewingmonth
     */
    Viewingmonth: boolean;
    Weeks: Array<CoreCalendarGetCalendarMonthlyView200ResponseWeeksInner>;
}

