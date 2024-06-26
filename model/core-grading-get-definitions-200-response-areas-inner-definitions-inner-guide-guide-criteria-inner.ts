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


export interface CoreGradingGetDefinitions200ResponseAreasInnerDefinitionsInnerGuideGuideCriteriaInner { 
    /**
     * description
     */
    Description?: string;
    /**
     * description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN)
     */
    Descriptionformat?: number;
    /**
     * markers description
     */
    Descriptionmarkers?: string;
    /**
     * descriptionmarkers format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN)
     */
    Descriptionmarkersformat?: number;
    /**
     * criterion id
     */
    Id?: number;
    /**
     * maximum score
     */
    Maxscore?: number;
    /**
     * description
     */
    Shortname?: string;
    /**
     * sortorder
     */
    Sortorder?: number;
}

