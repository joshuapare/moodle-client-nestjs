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
 * IMS content packages
 */
export interface ModImscpGetImscpsByCourses200ResponseImscpsInner { 
    /**
     * Course id
     */
    Course?: number;
    /**
     * Course module id
     */
    Coursemodule?: number;
    /**
     * Group id
     */
    Groupingid?: number;
    /**
     * Group mode
     */
    Groupmode?: number;
    /**
     * Activity instance id
     */
    Id?: number;
    /**
     * Activity introduction
     */
    Intro?: string;
    Introfiles?: Array<CoreBlockGetDashboardBlocks200ResponseBlocksInnerContentsFilesInner>;
    /**
     * intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN)
     */
    Introformat?: number;
    /**
     * Number of old IMSCP to keep
     */
    Keepold?: number;
    /**
     * Forced activity language
     */
    Lang?: string;
    /**
     * Activity name
     */
    Name?: string;
    /**
     * Revision
     */
    Revision?: number;
    /**
     * Course section id
     */
    Section?: number;
    /**
     * IMSCP structure
     */
    Structure?: string;
    /**
     * Time of last modification
     */
    Timemodified?: string;
    /**
     * Visible
     */
    Visible?: boolean;
}

