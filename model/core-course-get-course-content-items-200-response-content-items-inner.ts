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


export interface CoreCourseGetCourseContentItems200ResponseContentItemsInner { 
    /**
     * The archetype of the module exposing the content item
     */
    Archetype?: string;
    /**
     * The name of the component exposing the content item
     */
    Componentname?: string;
    /**
     * Has the user favourited the content item
     */
    Favourite?: boolean;
    /**
     * Html description / help for the content item
     */
    Help?: string;
    /**
     * Html containing the icon for the content item
     */
    Icon?: string;
    /**
     * The id of the content item
     */
    Id?: number;
    /**
     * If this item was pulled from the old callback and has no item id.
     */
    Legacyitem?: boolean;
    /**
     * The link to the content item creation page
     */
    Link?: string;
    /**
     * Name of the content item
     */
    Name?: string;
    /**
     * The purpose of the component exposing the content item
     */
    Purpose?: string;
    /**
     * Has this item been recommended
     */
    Recommended?: boolean;
    /**
     * The string title of the content item, human readable
     */
    Title?: string;
}
