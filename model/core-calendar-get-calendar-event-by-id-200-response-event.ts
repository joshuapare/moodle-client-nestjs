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
import { CoreCalendarGetActionEventsByCourses200ResponseGroupedbycourseInnerEventsInnerCategory } from './core-calendar-get-action-events-by-courses-200-response-groupedbycourse-inner-events-inner-category';
import { CoreCalendarGetActionEventsByCourses200ResponseGroupedbycourseInnerEventsInnerIcon } from './core-calendar-get-action-events-by-courses-200-response-groupedbycourse-inner-events-inner-icon';
import { CoreCalendarGetActionEventsByCourses200ResponseGroupedbycourseInnerEventsInnerAction } from './core-calendar-get-action-events-by-courses-200-response-groupedbycourse-inner-events-inner-action';
import { CoreCalendarGetActionEventsByCourses200ResponseGroupedbycourseInnerEventsInnerSubscription } from './core-calendar-get-action-events-by-courses-200-response-groupedbycourse-inner-events-inner-subscription';
import { CoreCalendarGetActionEventsByCourses200ResponseGroupedbycourseInnerEventsInnerCourse } from './core-calendar-get-action-events-by-courses-200-response-groupedbycourse-inner-events-inner-course';


export interface CoreCalendarGetCalendarEventById200ResponseEvent { 
    Action?: CoreCalendarGetActionEventsByCourses200ResponseGroupedbycourseInnerEventsInnerAction;
    /**
     * activityname
     */
    Activityname?: string;
    /**
     * activitystr
     */
    Activitystr?: string;
    /**
     * candelete
     */
    Candelete: boolean;
    /**
     * canedit
     */
    Canedit: boolean;
    Category?: CoreCalendarGetActionEventsByCourses200ResponseGroupedbycourseInnerEventsInnerCategory;
    /**
     * categoryid
     */
    Categoryid?: number;
    /**
     * component
     */
    Component?: string;
    Course?: CoreCalendarGetActionEventsByCourses200ResponseGroupedbycourseInnerEventsInnerCourse;
    /**
     * deleteurl
     */
    Deleteurl: string;
    /**
     * description
     */
    Description?: string;
    /**
     * description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN)
     */
    Descriptionformat?: number;
    /**
     * editurl
     */
    Editurl: string;
    /**
     * eventcount
     */
    Eventcount?: number;
    /**
     * eventtype
     */
    Eventtype: string;
    /**
     * formattedlocation
     */
    Formattedlocation: string;
    /**
     * formattedtime
     */
    Formattedtime: string;
    /**
     * groupid
     */
    Groupid?: number;
    /**
     * groupname
     */
    Groupname?: string;
    Icon: CoreCalendarGetActionEventsByCourses200ResponseGroupedbycourseInnerEventsInnerIcon;
    /**
     * id
     */
    Id: number;
    /**
     * instance
     */
    Instance?: number;
    /**
     * isactionevent
     */
    Isactionevent: boolean;
    /**
     * iscategoryevent
     */
    Iscategoryevent: boolean;
    /**
     * iscourseevent
     */
    Iscourseevent: boolean;
    /**
     * location
     */
    Location?: string;
    /**
     * modulename
     */
    Modulename?: string;
    /**
     * name
     */
    Name: string;
    /**
     * normalisedeventtype
     */
    Normalisedeventtype: string;
    /**
     * normalisedeventtypetext
     */
    Normalisedeventtypetext: string;
    /**
     * overdue
     */
    Overdue?: boolean;
    /**
     * purpose
     */
    Purpose: string;
    /**
     * repeatid
     */
    Repeatid?: number;
    Subscription?: CoreCalendarGetActionEventsByCourses200ResponseGroupedbycourseInnerEventsInnerSubscription;
    /**
     * timeduration
     */
    Timeduration: number;
    /**
     * timemodified
     */
    Timemodified: number;
    /**
     * timesort
     */
    Timesort: number;
    /**
     * timestart
     */
    Timestart: number;
    /**
     * timeusermidnight
     */
    Timeusermidnight: number;
    /**
     * url
     */
    Url: string;
    /**
     * userid
     */
    Userid?: number;
    /**
     * viewurl
     */
    Viewurl: string;
    /**
     * visible
     */
    Visible: number;
}

