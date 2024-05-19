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


export interface CoreCalendarGetActionEventsByCourse200ResponseEventsInnerCourse { 
    /**
     * coursecategory
     */
    Coursecategory: string;
    /**
     * courseimage
     */
    Courseimage: string;
    /**
     * enddate
     */
    Enddate: number;
    /**
     * fullname
     */
    Fullname: string;
    /**
     * fullnamedisplay
     */
    Fullnamedisplay: string;
    /**
     * hasprogress
     */
    Hasprogress: boolean;
    /**
     * hidden
     */
    Hidden: boolean;
    /**
     * id
     */
    Id: number;
    /**
     * idnumber
     */
    Idnumber: string;
    /**
     * isfavourite
     */
    Isfavourite: boolean;
    /**
     * pdfexportfont
     */
    Pdfexportfont: string;
    /**
     * progress
     */
    Progress?: number;
    /**
     * shortname
     */
    Shortname: string;
    /**
     * showactivitydates
     */
    Showactivitydates: boolean;
    /**
     * showcompletionconditions
     */
    Showcompletionconditions: boolean;
    /**
     * showshortname
     */
    Showshortname: boolean;
    /**
     * startdate
     */
    Startdate: number;
    /**
     * summary
     */
    Summary: string;
    /**
     * summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN)
     */
    Summaryformat: number;
    /**
     * timeaccess
     */
    Timeaccess?: number;
    /**
     * viewurl
     */
    Viewurl: string;
    /**
     * visible
     */
    Visible: boolean;
}

