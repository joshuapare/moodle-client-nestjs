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
 * Tool
 */
export interface ModLtiGetLtisByCourses200ResponseLtisInner { 
    /**
     * Course id
     */
    Course?: number;
    /**
     * Course module id
     */
    Coursemodule?: number;
    /**
     * Debug launch
     */
    Debuglaunch?: number;
    /**
     * Enable grades
     */
    Grade?: number;
    /**
     * Group id
     */
    Groupingid?: number;
    /**
     * Group mode
     */
    Groupmode?: number;
    /**
     * Alternative icon URL
     */
    Icon?: string;
    /**
     * Activity instance id
     */
    Id?: number;
    /**
     * instructor choice accept grades
     */
    Instructorchoiceacceptgrades?: number;
    /**
     * Instructor choice allow roster
     */
    Instructorchoiceallowroster?: number;
    /**
     * Instructor choice allow setting
     */
    Instructorchoiceallowsetting?: number;
    /**
     * instructor choice send mail address
     */
    Instructorchoicesendemailaddr?: number;
    /**
     * Instructor choice send name
     */
    Instructorchoicesendname?: string;
    /**
     * instructor custom parameters
     */
    Instructorcustomparameters?: string;
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
     * Forced activity language
     */
    Lang?: string;
    /**
     * Launch container mode
     */
    Launchcontainer?: number;
    /**
     * Activity name
     */
    Name?: string;
    /**
     * Shared secret
     */
    Password?: string;
    /**
     * Resource key
     */
    Resourcekey?: string;
    /**
     * Course section id
     */
    Section?: number;
    /**
     * Secure icon URL
     */
    Secureicon?: string;
    /**
     * Secure tool url
     */
    Securetoolurl?: string;
    /**
     * Service salt
     */
    Servicesalt?: string;
    /**
     * Show description launch
     */
    Showdescriptionlaunch?: number;
    /**
     * Show title launch
     */
    Showtitlelaunch?: number;
    /**
     * Time of creation
     */
    Timecreated?: number;
    /**
     * Time of last modification
     */
    Timemodified?: number;
    /**
     * Tool url
     */
    Toolurl?: string;
    /**
     * Type id
     */
    Typeid?: number;
    /**
     * Visible
     */
    Visible?: boolean;
}

