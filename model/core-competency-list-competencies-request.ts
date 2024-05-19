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
import { CoreCompetencyListCompetenciesRequestFiltersInner } from './core-competency-list-competencies-request-filters-inner';


export interface CoreCompetencyListCompetenciesRequest { 
    Filters: Array<CoreCompetencyListCompetenciesRequestFiltersInner>;
    /**
     * Return this number of records at most.
     */
    Limit?: number;
    /**
     * Sort direction. Should be either ASC or DESC
     */
    Order?: string;
    /**
     * Skip this number of records before returning results
     */
    Skip?: number;
    /**
     * Column to sort by.
     */
    Sort?: string;
}

