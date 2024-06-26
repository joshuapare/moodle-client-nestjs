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
import { ModForumGetDiscussionPostsByUserid200ResponseDiscussionsInnerPosts } from './mod-forum-get-discussion-posts-by-userid-200-response-discussions-inner-posts';


export interface ModForumGetDiscussionPostsByUserid200ResponseDiscussionsInner { 
    /**
     * Full name of the user that started the discussion
     */
    Authorfullname?: string;
    /**
     * ID of the discussion
     */
    Id?: number;
    /**
     * Name of the discussion
     */
    Name?: string;
    Posts?: ModForumGetDiscussionPostsByUserid200ResponseDiscussionsInnerPosts;
    /**
     * Timestamp of the discussion start
     */
    Timecreated?: number;
}

