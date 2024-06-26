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
import { ToolLpDataForCourseCompetenciesPage200ResponseCompetenciesInnerPlansInner } from './tool-lp-data-for-course-competencies-page-200-response-competencies-inner-plans-inner';


export interface ToolLpDataForPlansPage200Response { 
    /**
     * Can the current user manage the user\'s plans
     */
    Canmanageuserplans: boolean;
    /**
     * Can the current user view the user\'s evidence
     */
    Canreaduserevidence: boolean;
    Navigation: Array<object>;
    Plans: Array<ToolLpDataForCourseCompetenciesPage200ResponseCompetenciesInnerPlansInner>;
    /**
     * Url to the tool_lp plugin folder on this Moodle site
     */
    Pluginbaseurl: string;
    /**
     * The learning plan user id
     */
    Userid: number;
}

