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
import { ModForumAddDiscussionPost200ResponsePostTagsInner } from './mod-forum-add-discussion-post-200-response-post-tags-inner';
import { ModForumAddDiscussionPost200ResponsePostAuthor } from './mod-forum-add-discussion-post-200-response-post-author';
import { ModForumAddDiscussionPost200ResponsePostUrls } from './mod-forum-add-discussion-post-200-response-post-urls';
import { ModForumAddDiscussionPost200ResponsePostHtml } from './mod-forum-add-discussion-post-200-response-post-html';
import { ModFeedbackGetAnalysis200ResponseItemsdataInnerItemItemfilesInner } from './mod-feedback-get-analysis-200-response-itemsdata-inner-item-itemfiles-inner';
import { ModForumAddDiscussionPost200ResponsePostAttachmentsInner } from './mod-forum-add-discussion-post-200-response-post-attachments-inner';
import { ModForumAddDiscussionPost200ResponsePostCapabilities } from './mod-forum-add-discussion-post-200-response-post-capabilities';


export interface ModForumAddDiscussionPost200ResponsePost { 
    Attachments: Array<ModForumAddDiscussionPost200ResponsePostAttachmentsInner>;
    Author: ModForumAddDiscussionPost200ResponsePostAuthor;
    Capabilities: ModForumAddDiscussionPost200ResponsePostCapabilities;
    /**
     * charcount
     */
    Charcount?: number;
    /**
     * discussionid
     */
    Discussionid: number;
    /**
     * hasparent
     */
    Hasparent: boolean;
    /**
     * haswordcount
     */
    Haswordcount: boolean;
    Html?: ModForumAddDiscussionPost200ResponsePostHtml;
    /**
     * id
     */
    Id: number;
    /**
     * isdeleted
     */
    Isdeleted: boolean;
    /**
     * isprivatereply
     */
    Isprivatereply: boolean;
    /**
     * message
     */
    Message: string;
    /**
     * message format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN)
     */
    Messageformat: number;
    Messageinlinefiles?: Array<ModFeedbackGetAnalysis200ResponseItemsdataInnerItemItemfilesInner>;
    /**
     * parentid
     */
    Parentid?: number;
    /**
     * replysubject
     */
    Replysubject: string;
    /**
     * subject
     */
    Subject: string;
    Tags?: Array<ModForumAddDiscussionPost200ResponsePostTagsInner>;
    /**
     * timecreated
     */
    Timecreated: number;
    /**
     * timemodified
     */
    Timemodified: number;
    /**
     * unread
     */
    Unread?: boolean;
    Urls?: ModForumAddDiscussionPost200ResponsePostUrls;
    /**
     * wordcount
     */
    Wordcount?: number;
}

