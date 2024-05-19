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
import { CoreCourseUpdateCoursesRequestCoursesInnerCourseformatoptionsInner } from './core-course-update-courses-request-courses-inner-courseformatoptions-inner';
import { CoreCohortUpdateCohortsRequestCohortsInnerCustomfieldsInner } from './core-cohort-update-cohorts-request-cohorts-inner-customfields-inner';


export interface CoreCourseUpdateCoursesRequestCoursesInner { 
    /**
     * category id
     */
    Categoryid?: number;
    /**
     * 1: yes 0: no
     */
    Completionnotify?: number;
    Courseformatoptions?: Array<CoreCourseUpdateCoursesRequestCoursesInnerCourseformatoptionsInner>;
    Customfields?: Array<CoreCohortUpdateCohortsRequestCohortsInnerCustomfieldsInner>;
    /**
     * default grouping id
     */
    Defaultgroupingid?: number;
    /**
     * Enabled, control via completion and activity settings. Disabled,                                         not shown in activity settings.
     */
    Enablecompletion?: number;
    /**
     * timestamp when the course end
     */
    Enddate?: number;
    /**
     * name of the force theme
     */
    Forcetheme?: string;
    /**
     * course format: weeks, topics, social, site,..
     */
    Format?: string;
    /**
     * full name
     */
    Fullname?: string;
    /**
     * no group, separate, visible
     */
    Groupmode?: number;
    /**
     * 1: yes, 0: no
     */
    Groupmodeforce?: number;
    /**
     * (deprecated, use courseformatoptions) How the hidden sections in the course are                                         displayed to students
     */
    Hiddensections?: number;
    /**
     * ID of the course
     */
    Id?: number;
    /**
     * id number
     */
    Idnumber?: string;
    /**
     * forced course language
     */
    Lang?: string;
    /**
     * largest size of file that can be uploaded into the course
     */
    Maxbytes?: number;
    /**
     * number of recent items appearing on the course page
     */
    Newsitems?: number;
    /**
     * (deprecated, use courseformatoptions) number of weeks/topics
     */
    Numsections?: number;
    /**
     * course short name
     */
    Shortname?: string;
    /**
     * 1 if grades are shown, otherwise 0
     */
    Showgrades?: number;
    /**
     * are activity report shown (yes = 1, no =0)
     */
    Showreports?: number;
    /**
     * timestamp when the course start
     */
    Startdate?: number;
    /**
     * summary
     */
    Summary?: string;
    /**
     * summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN)
     */
    Summaryformat?: number;
    /**
     * 1: available to student, 0:not available
     */
    Visible?: number;
}

