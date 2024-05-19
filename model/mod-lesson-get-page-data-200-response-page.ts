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


export interface ModLessonGetPageData200ResponsePage { 
    /**
     * The contents of this page
     */
    Contents?: string;
    /**
     * contents format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN)
     */
    Contentsformat?: number;
    /**
     * Used to record page specific display selections
     */
    Display: number;
    /**
     * Toggles display in the left menu block
     */
    Displayinmenublock: boolean;
    /**
     * The id of this lesson page
     */
    Id: number;
    /**
     * Used to record page specific layout selections
     */
    Layout: number;
    /**
     * The id of the lesson this page belongs to
     */
    Lessonid: number;
    /**
     * The id of the next page in the page sequence
     */
    Nextpageid: number;
    /**
     * The id of the page before this one
     */
    Prevpageid: number;
    /**
     * Used to record page type specific options
     */
    Qoption: number;
    /**
     * Identifies the page type of this page
     */
    Qtype: number;
    /**
     * Timestamp for when the page was created
     */
    Timecreated: number;
    /**
     * Timestamp for when the page was last modified
     */
    Timemodified: number;
    /**
     * The title of this page
     */
    Title?: string;
    /**
     * The type of the page [question | structure]
     */
    Type: number;
    /**
     * The unique identifier for the page type
     */
    Typeid: number;
    /**
     * The string that describes this page type
     */
    Typestring: string;
}

