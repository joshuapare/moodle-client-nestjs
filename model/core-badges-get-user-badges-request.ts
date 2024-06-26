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


export interface CoreBadgesGetUserBadgesRequest { 
    /**
     * Filter badges by course id, empty all the courses
     */
    Courseid?: number;
    /**
     * Whether to return only public badges
     */
    Onlypublic?: boolean;
    /**
     * The page of records to return.
     */
    Page?: number;
    /**
     * The number of records to return per page
     */
    Perpage?: number;
    /**
     * A simple string to search for
     */
    Search?: string;
    /**
     * Badges only for this user id, empty for current user
     */
    Userid?: number;
}

