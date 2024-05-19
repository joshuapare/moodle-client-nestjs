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
import { AuthEmailSignupUser200ResponseWarningsInner } from './auth-email-signup-user-200-response-warnings-inner';
import { ModForumPrepareDraftAreaForPost200ResponseAreaoptionsInner } from './mod-forum-prepare-draft-area-for-post-200-response-areaoptions-inner';


export interface ModForumPrepareDraftAreaForPost200Response { 
    Areaoptions: Array<ModForumPrepareDraftAreaForPost200ResponseAreaoptionsInner>;
    /**
     * Draft item id for the file area.
     */
    Draftitemid: number;
    Files?: Array<CoreBlockGetDashboardBlocks200ResponseBlocksInnerContentsFilesInner>;
    /**
     * Message text with URLs rewritten.
     */
    Messagetext: string;
    Warnings?: Array<AuthEmailSignupUser200ResponseWarningsInner>;
}
