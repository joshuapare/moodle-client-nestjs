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
import { ToolLpDataForCompetencySummary200ResponseComppath } from './tool-lp-data-for-competency-summary-200-response-comppath';
import { CoreCompetencyCreateCompetency200Response } from './core-competency-create-competency-200-response';
import { ToolLpDataForCourseCompetenciesPage200ResponseCompetenciesInnerRuleoutcomeoptionsInner } from './tool-lp-data-for-course-competencies-page-200-response-competencies-inner-ruleoutcomeoptions-inner';
import { ToolLpDataForCourseCompetenciesPage200ResponseCompetenciesInnerCoursecompetency } from './tool-lp-data-for-course-competencies-page-200-response-competencies-inner-coursecompetency';
import { ToolLpDataForCourseCompetenciesPage200ResponseCompetenciesInnerPlansInner } from './tool-lp-data-for-course-competencies-page-200-response-competencies-inner-plans-inner';
import { ToolLpDataForCourseCompetenciesPage200ResponseCompetenciesInnerUsercompetencycourse } from './tool-lp-data-for-course-competencies-page-200-response-competencies-inner-usercompetencycourse';


export interface ToolLpDataForCourseCompetenciesPage200ResponseCompetenciesInner { 
    Competency?: CoreCompetencyCreateCompetency200Response;
    Comppath?: ToolLpDataForCompetencySummary200ResponseComppath;
    Coursecompetency?: ToolLpDataForCourseCompetenciesPage200ResponseCompetenciesInnerCoursecompetency;
    Coursemodules?: Array<ToolLpDataForCourseCompetenciesPage200ResponseCompetenciesInnerCoursemodulesInner>;
    Plans?: Array<ToolLpDataForCourseCompetenciesPage200ResponseCompetenciesInnerPlansInner>;
    Ruleoutcomeoptions?: Array<ToolLpDataForCourseCompetenciesPage200ResponseCompetenciesInnerRuleoutcomeoptionsInner>;
    Usercompetencycourse?: ToolLpDataForCourseCompetenciesPage200ResponseCompetenciesInnerUsercompetencycourse;
}

