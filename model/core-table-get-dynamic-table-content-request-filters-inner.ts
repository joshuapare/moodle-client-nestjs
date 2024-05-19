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
import { CoreTableGetDynamicTableContentRequestFiltersInnerFilteroptionsInner } from './core-table-get-dynamic-table-content-request-filters-inner-filteroptions-inner';


export interface CoreTableGetDynamicTableContentRequestFiltersInner { 
    Filteroptions?: Array<CoreTableGetDynamicTableContentRequestFiltersInnerFilteroptionsInner>;
    /**
     * Type of join for filter values
     */
    Jointype?: number;
    /**
     * Name of the filter
     */
    Name?: string;
    Values?: Array<object>;
}

