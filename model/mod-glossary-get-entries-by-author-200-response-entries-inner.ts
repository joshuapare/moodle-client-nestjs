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
import { ModDataGetEntries200ResponseEntriesInnerTagsInner } from './mod-data-get-entries-200-response-entries-inner-tags-inner';
import { CoreBlockGetDashboardBlocks200ResponseBlocksInnerContentsFilesInner } from './core-block-get-dashboard-blocks-200-response-blocks-inner-contents-files-inner';


export interface ModGlossaryGetEntriesByAuthor200ResponseEntriesInner { 
    /**
     * Whether the entry was approved
     */
    Approved?: boolean;
    /**
     * Whether or not the entry has attachments
     */
    Attachment?: boolean;
    Attachments?: Array<CoreBlockGetDashboardBlocks200ResponseBlocksInnerContentsFilesInner>;
    /**
     * When true, the matching is case sensitive
     */
    Casesensitive?: boolean;
    /**
     * The concept
     */
    Concept?: string;
    /**
     * The definition
     */
    Definition?: string;
    /**
     * definition format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN)
     */
    Definitionformat?: number;
    Definitioninlinefiles?: Array<CoreBlockGetDashboardBlocks200ResponseBlocksInnerContentsFilesInner>;
    /**
     * The definition trust flag
     */
    Definitiontrust?: boolean;
    /**
     * When true, the matching is done on full words only
     */
    Fullmatch?: boolean;
    /**
     * The glossary ID
     */
    Glossaryid?: number;
    /**
     * The entry ID
     */
    Id?: number;
    /**
     * The source glossary ID
     */
    Sourceglossaryid?: number;
    Tags?: Array<ModDataGetEntries200ResponseEntriesInnerTagsInner>;
    /**
     * The entry was created by a teacher, or equivalent.
     */
    Teacherentry?: boolean;
    /**
     * Time created
     */
    Timecreated?: number;
    /**
     * Time modified
     */
    Timemodified?: number;
    /**
     * Whether the concept should be automatically linked
     */
    Usedynalink?: boolean;
    /**
     * Author full name
     */
    Userfullname?: string;
    /**
     * Author ID
     */
    Userid?: number;
    /**
     * Author picture
     */
    Userpictureurl?: string;
}

