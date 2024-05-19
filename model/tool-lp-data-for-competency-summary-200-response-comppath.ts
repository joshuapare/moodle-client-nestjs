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
import { ToolLpDataForCompetencySummary200ResponseComppathAncestorsInner } from './tool-lp-data-for-competency-summary-200-response-comppath-ancestors-inner';
import { ReportCompetencyDataForReport200ResponseUsercompetenciesInnerCompetencyComppathFramework } from './report-competency-data-for-report-200-response-usercompetencies-inner-competency-comppath-framework';


export interface ToolLpDataForCompetencySummary200ResponseComppath { 
    Ancestors: Array<ToolLpDataForCompetencySummary200ResponseComppathAncestorsInner>;
    Framework: ReportCompetencyDataForReport200ResponseUsercompetenciesInnerCompetencyComppathFramework;
    /**
     * pagecontextid
     */
    Pagecontextid: number;
    /**
     * pluginbaseurl
     */
    Pluginbaseurl: string;
    /**
     * showlinks
     */
    Showlinks: boolean;
}

