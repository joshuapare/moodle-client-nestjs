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


export interface ModLessonGetLesson200ResponseLesson { 
    /**
     * Id of the next activity to be linked once the lesson is completed
     */
    Activitylink?: number;
    /**
     * Whether to allow the lesson to be attempted offline in the mobile app
     */
    Allowofflineattempts: boolean;
    /**
     * Available from
     */
    Available?: number;
    /**
     * Slideshow bgcolor
     */
    Bgcolor?: string;
    /**
     * Require end reached for completion?
     */
    Completionendreached?: number;
    /**
     * Student must do this activity at least for
     */
    Completiontimespent?: number;
    /**
     * Conditions to enable the lesson
     */
    Conditions?: string;
    /**
     * Foreign key reference to the course this lesson is part of.
     */
    Course: number;
    /**
     * Course module id.
     */
    Coursemodule: number;
    /**
     * Custom scoring?
     */
    Custom?: boolean;
    /**
     * Available until
     */
    Deadline?: number;
    /**
     * Dependent on (another lesson id)
     */
    Dependency?: number;
    /**
     * Display left pages menu?
     */
    Displayleft?: boolean;
    /**
     * Minimum grade to display menu
     */
    Displayleftif?: number;
    /**
     * Display default feedback
     */
    Feedback?: boolean;
    /**
     * The total that the grade is scaled to be out of
     */
    Grade?: number;
    /**
     * Slideshow height
     */
    Height?: number;
    /**
     * Standard Moodle primary key.
     */
    Id: number;
    /**
     * Lesson introduction text.
     */
    Intro?: string;
    Introfiles?: Array<CoreBlogGetEntries200ResponseEntriesInnerSummaryfilesInner>;
    /**
     * intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN)
     */
    Introformat?: number;
    /**
     * Forced activity language
     */
    Lang: string;
    /**
     * Maximum answers per page
     */
    Maxanswers?: number;
    /**
     * Maximum attempts
     */
    Maxattempts?: number;
    /**
     * Number of pages to show
     */
    Maxpages?: number;
    /**
     * Display a close button in the popup?
     */
    Mediaclose?: number;
    /**
     * Local file path or full external URL
     */
    Mediafile?: string;
    Mediafiles?: Array<CoreBlogGetEntries200ResponseEntriesInnerSummaryfilesInner>;
    /**
     * Popup for media file height
     */
    Mediaheight?: number;
    /**
     * Popup for media with
     */
    Mediawidth?: number;
    /**
     * Minimum number of questions
     */
    Minquestions?: number;
    /**
     * Allow student review?
     */
    Modattempts?: boolean;
    /**
     * Lesson name.
     */
    Name: string;
    /**
     * Action for a correct answer
     */
    Nextpagedefault?: number;
    /**
     * Display ongoing score?
     */
    Ongoing?: boolean;
    /**
     * Password
     */
    Password?: string;
    /**
     * Practice lesson?
     */
    Practice?: boolean;
    /**
     * Display progress bar?
     */
    Progressbar?: boolean;
    /**
     * Re-takes allowed
     */
    Retake?: boolean;
    /**
     * Provide option to try a question again
     */
    Review?: boolean;
    /**
     * Display lesson as slideshow
     */
    Slideshow?: boolean;
    /**
     * Time limit
     */
    Timelimit?: number;
    /**
     * Last time settings were updated
     */
    Timemodified?: number;
    /**
     * How to calculate the final grade
     */
    Usemaxgrade?: number;
    /**
     * Password protected lesson?
     */
    Usepassword?: boolean;
    /**
     * Slideshow width
     */
    Width?: number;
}

