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
import { CoreBlockGetDashboardBlocks200ResponseBlocksInnerContentsFilesInner } from './core-block-get-dashboard-blocks-200-response-blocks-inner-contents-files-inner';


/**
 * The page answers
 */
export interface ModLessonGetPageData200ResponseAnswersInner { 
    /**
     * Possible answer text
     */
    Answer?: string;
    Answerfiles?: Array<CoreBlockGetDashboardBlocks200ResponseBlocksInnerContentsFilesInner>;
    /**
     * answer format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN)
     */
    Answerformat?: number;
    /**
     * Used to store options for the answer
     */
    Flags?: number;
    /**
     * The grade this answer is worth
     */
    Grade?: number;
    /**
     * The ID of this answer in the database
     */
    Id?: number;
    /**
     * Identifies where the user goes upon completing a page with this answer
     */
    Jumpto?: number;
    /**
     * Response text for the answer
     */
    Response?: string;
    Responsefiles?: Array<CoreBlockGetDashboardBlocks200ResponseBlocksInnerContentsFilesInner>;
    /**
     * response format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN)
     */
    Responseformat?: number;
    /**
     * The score this answer will give
     */
    Score?: number;
    /**
     * A timestamp of when the answer was created
     */
    Timecreated?: number;
    /**
     * A timestamp of when the answer was modified
     */
    Timemodified?: number;
}
