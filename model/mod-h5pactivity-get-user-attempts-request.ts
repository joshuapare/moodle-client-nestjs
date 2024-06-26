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


export interface ModH5pactivityGetUserAttemptsRequest { 
    /**
     * Users whose first name starts with $firstinitial
     */
    Firstinitial?: string;
    /**
     * h5p activity instance id
     */
    H5pactivityid: number;
    /**
     * Users whose last name starts with $lastinitial
     */
    Lastinitial?: string;
    /**
     * current page
     */
    Page?: number;
    /**
     * items per page
     */
    Perpage?: number;
    /**
     * sort by either user id, firstname or lastname (with optional asc/desc)
     */
    Sortorder?: string;
}

