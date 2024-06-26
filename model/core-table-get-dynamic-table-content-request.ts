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
import { CoreTableGetDynamicTableContentRequestFiltersInner } from './core-table-get-dynamic-table-content-request-filters-inner';
import { CoreTableGetDynamicTableContentRequestSortdataInner } from './core-table-get-dynamic-table-content-request-sortdata-inner';


export interface CoreTableGetDynamicTableContentRequest { 
    /**
     * Component
     */
    Component: string;
    Filters?: Array<CoreTableGetDynamicTableContentRequestFiltersInner>;
    /**
     * The first initial to sort filter on
     */
    Firstinitial: string;
    /**
     * Handler
     */
    Handler: string;
    Hiddencolumns: Array<object>;
    /**
     * Type of join to join all filters together
     */
    Jointype: number;
    /**
     * The last initial to sort filter on
     */
    Lastinitial: string;
    /**
     * The page number
     */
    Pagenumber: number;
    /**
     * The number of records per page
     */
    Pagesize: number;
    /**
     * Whether the table preferences should be reset
     */
    Resetpreferences: boolean;
    Sortdata?: Array<CoreTableGetDynamicTableContentRequestSortdataInner>;
    /**
     * Unique ID for the container
     */
    Uniqueid: string;
}

