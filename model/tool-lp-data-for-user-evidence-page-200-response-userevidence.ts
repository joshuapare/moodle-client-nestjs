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
import { ToolLpDataForUserEvidenceListPage200ResponseEvidenceInnerUsercompetenciesInner } from './tool-lp-data-for-user-evidence-list-page-200-response-evidence-inner-usercompetencies-inner';
import { ModFeedbackGetAnalysis200ResponseItemsdataInnerItemItemfilesInner } from './mod-feedback-get-analysis-200-response-itemsdata-inner-item-itemfiles-inner';


export interface ToolLpDataForUserEvidencePage200ResponseUserevidence { 
    /**
     * canmanage
     */
    Canmanage: boolean;
    /**
     * competencycount
     */
    Competencycount: number;
    /**
     * description
     */
    Description: string;
    /**
     * description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN)
     */
    Descriptionformat?: number;
    /**
     * filecount
     */
    Filecount: number;
    Files: Array<ModFeedbackGetAnalysis200ResponseItemsdataInnerItemItemfilesInner>;
    /**
     * hasurlorfiles
     */
    Hasurlorfiles: boolean;
    /**
     * id
     */
    Id: number;
    /**
     * name
     */
    Name: string;
    /**
     * timecreated
     */
    Timecreated: number;
    /**
     * timemodified
     */
    Timemodified: number;
    /**
     * url
     */
    Url: string;
    /**
     * urlshort
     */
    Urlshort: string;
    Usercompetencies?: Array<ToolLpDataForUserEvidenceListPage200ResponseEvidenceInnerUsercompetenciesInner>;
    /**
     * userhasplan
     */
    Userhasplan: boolean;
    /**
     * userid
     */
    Userid: number;
    /**
     * usermodified
     */
    Usermodified: number;
}

