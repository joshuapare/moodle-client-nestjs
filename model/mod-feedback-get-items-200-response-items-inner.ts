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
import { ModFeedbackGetAnalysis200ResponseItemsdataInnerItemItemfilesInner } from './mod-feedback-get-analysis-200-response-itemsdata-inner-item-itemfiles-inner';


export interface ModFeedbackGetItems200ResponseItemsInner { 
    /**
     * The item id this item depend on.
     */
    Dependitem?: number;
    /**
     * The depend value.
     */
    Dependvalue?: string;
    /**
     * The feedback instance id this records belongs to.
     */
    Feedback?: number;
    /**
     * Whether it has a value or not.
     */
    Hasvalue?: number;
    /**
     * The record id.
     */
    Id?: number;
    Itemfiles?: Array<ModFeedbackGetAnalysis200ResponseItemsdataInnerItemItemfilesInner>;
    /**
     * The item position number
     */
    Itemnumber?: number;
    /**
     * The item label.
     */
    Label?: string;
    /**
     * The item name.
     */
    Name?: string;
    /**
     * Different additional settings for the item (question).
     */
    Options?: string;
    /**
     * Additional data that may be required by external functions
     */
    Otherdata?: string;
    /**
     * The position in the list of questions.
     */
    Position?: number;
    /**
     * The text describing the item or the available possible answers.
     */
    Presentation?: string;
    /**
     * Whether is a item (question) required or not.
     */
    Required?: boolean;
    /**
     * If it belogns to a template, the template id.
     */
    Template?: number;
    /**
     * The type of the item.
     */
    Typ?: string;
}
