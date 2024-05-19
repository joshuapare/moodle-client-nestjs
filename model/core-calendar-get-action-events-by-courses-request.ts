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


export interface CoreCalendarGetActionEventsByCoursesRequest { 
    Courseids: Array<object>;
    /**
     * Limit number
     */
    Limitnum?: number;
    /**
     * The value a user wishes to search against
     */
    Searchvalue?: string;
    /**
     * Time sort from
     */
    Timesortfrom?: number;
    /**
     * Time sort to
     */
    Timesortto?: number;
}
