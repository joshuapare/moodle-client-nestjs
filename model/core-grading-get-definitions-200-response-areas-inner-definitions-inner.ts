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
import { CoreGradingGetDefinitions200ResponseAreasInnerDefinitionsInnerGuide } from './core-grading-get-definitions-200-response-areas-inner-definitions-inner-guide';
import { CoreGradingGetDefinitions200ResponseAreasInnerDefinitionsInnerRubric } from './core-grading-get-definitions-200-response-areas-inner-definitions-inner-rubric';


export interface CoreGradingGetDefinitions200ResponseAreasInnerDefinitionsInner { 
    /**
     * copied from id
     */
    Copiedfromid?: number;
    /**
     * description
     */
    Description?: string;
    /**
     * description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN)
     */
    Descriptionformat?: number;
    Guide?: CoreGradingGetDefinitions200ResponseAreasInnerDefinitionsInnerGuide;
    /**
     * definition id
     */
    Id?: number;
    /**
     * method
     */
    Method?: string;
    /**
     * name
     */
    Name?: string;
    Rubric?: CoreGradingGetDefinitions200ResponseAreasInnerDefinitionsInnerRubric;
    /**
     * status
     */
    Status?: number;
    /**
     * time copied
     */
    Timecopied?: number;
    /**
     * creation time
     */
    Timecreated?: number;
    /**
     * last modified time
     */
    Timemodified?: number;
    /**
     * user who created definition
     */
    Usercreated?: number;
    /**
     * user who modified definition
     */
    Usermodified?: number;
}

