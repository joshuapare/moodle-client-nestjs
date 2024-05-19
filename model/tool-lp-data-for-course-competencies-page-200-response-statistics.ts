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
import { CoreCompetencyReadUserEvidence200ResponseCompetenciesInner } from './core-competency-read-user-evidence-200-response-competencies-inner';


export interface ToolLpDataForCourseCompetenciesPage200ResponseStatistics { 
    /**
     * canbegradedincourse
     */
    Canbegradedincourse: boolean;
    /**
     * canmanagecoursecompetencies
     */
    Canmanagecoursecompetencies: boolean;
    /**
     * competencycount
     */
    Competencycount: number;
    Leastproficient: Array<CoreCompetencyReadUserEvidence200ResponseCompetenciesInner>;
    /**
     * leastproficientcount
     */
    Leastproficientcount: number;
    /**
     * proficientcompetencycount
     */
    Proficientcompetencycount: number;
    /**
     * proficientcompetencypercentage
     */
    Proficientcompetencypercentage: number;
    /**
     * proficientcompetencypercentageformatted
     */
    Proficientcompetencypercentageformatted: string;
}

