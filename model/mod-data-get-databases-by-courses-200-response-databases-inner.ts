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
import { CoreBlogGetEntries200ResponseEntriesInnerSummaryfilesInner } from './core-blog-get-entries-200-response-entries-inner-summaryfiles-inner';


export interface ModDataGetDatabasesByCourses200ResponseDatabasesInner { 
    /**
     * addtemplate field
     */
    Addtemplate?: string;
    /**
     * approval field
     */
    Approval?: boolean;
    /**
     * asearchtemplate field
     */
    Asearchtemplate?: string;
    /**
     * assessed field
     */
    Assessed?: number;
    /**
     * assesstimefinish field
     */
    Assesstimefinish?: number;
    /**
     * assesstimestart field
     */
    Assesstimestart?: number;
    /**
     * comments enabled
     */
    Comments?: boolean;
    /**
     * Course id
     */
    Course?: number;
    /**
     * coursemodule
     */
    Coursemodule?: number;
    /**
     * csstemplate field
     */
    Csstemplate?: string;
    /**
     * defaultsort field
     */
    Defaultsort?: number;
    /**
     * defaultsortdir field
     */
    Defaultsortdir?: number;
    /**
     * editany field (not used any more)
     */
    Editany?: boolean;
    /**
     * Database id
     */
    Id?: number;
    /**
     * The Database intro
     */
    Intro?: string;
    Introfiles?: Array<CoreBlogGetEntries200ResponseEntriesInnerSummaryfilesInner>;
    /**
     * intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN)
     */
    Introformat?: number;
    /**
     * jstemplate field
     */
    Jstemplate?: string;
    /**
     * Forced activity language
     */
    Lang?: string;
    /**
     * listtemplate field
     */
    Listtemplate?: string;
    /**
     * listtemplatefooter field
     */
    Listtemplatefooter?: string;
    /**
     * listtemplateheader field
     */
    Listtemplateheader?: string;
    /**
     * manageapproved field
     */
    Manageapproved?: boolean;
    /**
     * maxentries field
     */
    Maxentries?: number;
    /**
     * Database name
     */
    Name?: string;
    /**
     * notification field (not used any more)
     */
    Notification?: number;
    /**
     * requiredentries field
     */
    Requiredentries?: number;
    /**
     * requiredentriestoview field
     */
    Requiredentriestoview?: number;
    /**
     * rssarticles field
     */
    Rssarticles?: number;
    /**
     * rsstemplate field
     */
    Rsstemplate?: string;
    /**
     * rsstitletemplate field
     */
    Rsstitletemplate?: string;
    /**
     * scale field
     */
    Scale?: number;
    /**
     * singletemplate field
     */
    Singletemplate?: string;
    /**
     * timeavailablefrom field
     */
    Timeavailablefrom?: number;
    /**
     * timeavailableto field
     */
    Timeavailableto?: number;
    /**
     * Time modified
     */
    Timemodified?: number;
    /**
     * timeviewfrom field
     */
    Timeviewfrom?: number;
    /**
     * timeviewto field
     */
    Timeviewto?: number;
}

