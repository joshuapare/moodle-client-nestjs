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
import { ToolLpDataForCourseCompetenciesPage200ResponseCompetenciesInnerCoursemodulesInner } from './tool-lp-data-for-course-competencies-page-200-response-competencies-inner-coursemodules-inner';
import { ToolLpDataForUserCompetencySummaryInCourse200ResponseUsercompetencysummary } from './tool-lp-data-for-user-competency-summary-in-course-200-response-usercompetencysummary';
import { ToolLpDataForCourseCompetenciesPage200ResponseCompetenciesInnerPlansInner } from './tool-lp-data-for-course-competencies-page-200-response-competencies-inner-plans-inner';
import { CoreCalendarGetActionEventsByCourses200ResponseGroupedbycourseInnerEventsInnerCourse } from './core-calendar-get-action-events-by-courses-200-response-groupedbycourse-inner-events-inner-course';


export interface ToolLpDataForUserCompetencySummaryInCourse200Response { 
    Course: CoreCalendarGetActionEventsByCourses200ResponseGroupedbycourseInnerEventsInnerCourse;
    Coursemodules: Array<ToolLpDataForCourseCompetenciesPage200ResponseCompetenciesInnerCoursemodulesInner>;
    Plans: Array<ToolLpDataForCourseCompetenciesPage200ResponseCompetenciesInnerPlansInner>;
    /**
     * pluginbaseurl
     */
    Pluginbaseurl: string;
    Usercompetencysummary: ToolLpDataForUserCompetencySummaryInCourse200ResponseUsercompetencysummary;
}

