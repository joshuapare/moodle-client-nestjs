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


export interface CoreTagGetTagCloudRequest { 
    /**
     * Only retrieve tag instances in this context.
     */
    Ctx?: number;
    /**
     * Context id where this tag cloud is displayed.
     */
    Fromctx?: number;
    /**
     * Whether to return only standard tags.
     */
    Isstandard?: boolean;
    /**
     * Maximum number of tags to retrieve.
     */
    Limit?: number;
    /**
     * Retrieve tag instances in the $ctx context and it\'s children.
     */
    Rec?: number;
    /**
     * Search string.
     */
    Search?: string;
    /**
     * Sort order for display                     (id, name, rawname, count, flag, isstandard, tagcollid).
     */
    Sort?: string;
    /**
     * Tag collection id.
     */
    Tagcollid?: number;
}

