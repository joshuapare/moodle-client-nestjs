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
import { ModH5pactivityGetH5pactivitiesByCourses200ResponseH5pactivitiesInnerDeployedfile } from './mod-h5pactivity-get-h5pactivities-by-courses-200-response-h5pactivities-inner-deployedfile';


export interface ModH5pactivityGetH5pactivitiesByCourses200ResponseH5pactivitiesInner { 
    /**
     * Sha1 hash of file content.
     */
    Contenthash?: string;
    /**
     * context
     */
    Context?: number;
    /**
     * Course id this h5p activity is part of.
     */
    Course?: number;
    /**
     * coursemodule
     */
    Coursemodule?: number;
    Deployedfile?: ModH5pactivityGetH5pactivitiesByCourses200ResponseH5pactivitiesInnerDeployedfile;
    /**
     * H5P Button display options.
     */
    Displayoptions?: number;
    /**
     * Enable xAPI tracking.
     */
    Enabletracking?: number;
    /**
     * The maximum grade for submission.
     */
    Grade?: number;
    /**
     * Which H5P attempt is used for grading.
     */
    Grademethod?: number;
    /**
     * The primary key of the record.
     */
    Id?: number;
    /**
     * H5P activity description.
     */
    Intro?: string;
    Introfiles?: Array<CoreBlogGetEntries200ResponseEntriesInnerSummaryfilesInner>;
    /**
     * intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN)
     */
    Introformat?: number;
    /**
     * The name of the activity module instance.
     */
    Name?: string;
    Package?: Array<CoreBlogGetEntries200ResponseEntriesInnerSummaryfilesInner>;
    /**
     * Timestamp of when the instance was added to the course.
     */
    Timecreated?: number;
    /**
     * Timestamp of when the instance was last modified.
     */
    Timemodified?: number;
}

