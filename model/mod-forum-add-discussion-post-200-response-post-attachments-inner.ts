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
import { ModForumAddDiscussionPost200ResponsePostAttachmentsInnerHtml } from './mod-forum-add-discussion-post-200-response-post-attachments-inner-html';
import { ModForumAddDiscussionPost200ResponsePostAttachmentsInnerUrls } from './mod-forum-add-discussion-post-200-response-post-attachments-inner-urls';


export interface ModForumAddDiscussionPost200ResponsePostAttachmentsInner { 
    /**
     * author
     */
    Author?: string;
    /**
     * component
     */
    Component?: string;
    /**
     * contextid
     */
    Contextid?: number;
    /**
     * filearea
     */
    Filearea?: string;
    /**
     * filename
     */
    Filename?: string;
    /**
     * filenameshort
     */
    Filenameshort?: string;
    /**
     * filepath
     */
    Filepath?: string;
    /**
     * filesize
     */
    Filesize?: number;
    /**
     * filesizeformatted
     */
    Filesizeformatted?: string;
    Html?: ModForumAddDiscussionPost200ResponsePostAttachmentsInnerHtml;
    /**
     * icon
     */
    Icon?: string;
    /**
     * isdir
     */
    Isdir?: boolean;
    /**
     * isimage
     */
    Isimage?: boolean;
    /**
     * itemid
     */
    Itemid?: number;
    /**
     * license
     */
    License?: string;
    /**
     * timecreated
     */
    Timecreated?: number;
    /**
     * timecreatedformatted
     */
    Timecreatedformatted?: string;
    /**
     * timemodified
     */
    Timemodified?: number;
    /**
     * timemodifiedformatted
     */
    Timemodifiedformatted?: string;
    /**
     * url
     */
    Url?: string;
    Urls?: ModForumAddDiscussionPost200ResponsePostAttachmentsInnerUrls;
}
