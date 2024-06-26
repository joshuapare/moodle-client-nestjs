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
import { ModGlossaryGetEntriesByAuthor200ResponseEntriesInner } from './mod-glossary-get-entries-by-author-200-response-entries-inner';
import { AuthEmailSignupUser200ResponseWarningsInner } from './auth-email-signup-user-200-response-warnings-inner';
import { ModForumGetDiscussionPosts200ResponseRatinginfo } from './mod-forum-get-discussion-posts-200-response-ratinginfo';


export interface ModGlossaryGetEntriesByAuthor200Response { 
    /**
     * The total number of records matching the request.
     */
    Count: number;
    Entries: Array<ModGlossaryGetEntriesByAuthor200ResponseEntriesInner>;
    Ratinginfo?: ModForumGetDiscussionPosts200ResponseRatinginfo;
    Warnings?: Array<AuthEmailSignupUser200ResponseWarningsInner>;
}

