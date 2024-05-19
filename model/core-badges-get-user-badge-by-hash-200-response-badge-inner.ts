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
import { CoreBadgesGetUserBadgeByHash200ResponseBadgeInnerRelatedbadgesInner } from './core-badges-get-user-badge-by-hash-200-response-badge-inner-relatedbadges-inner';
import { CoreBadgesGetUserBadgeByHash200ResponseBadgeInnerEndorsement } from './core-badges-get-user-badge-by-hash-200-response-badge-inner-endorsement';
import { CoreBadgesGetUserBadgeByHash200ResponseBadgeInnerAlignmentInner } from './core-badges-get-user-badge-by-hash-200-response-badge-inner-alignment-inner';


export interface CoreBadgesGetUserBadgeByHash200ResponseBadgeInner { 
    Alignment?: Array<CoreBadgesGetUserBadgeByHash200ResponseBadgeInnerAlignmentInner>;
    /**
     * Attachment
     */
    Attachment?: number;
    /**
     * Badge URL
     */
    Badgeurl?: string;
    /**
     * Course id
     */
    Courseid?: number;
    /**
     * Date expire
     */
    Dateexpire?: number;
    /**
     * Date issued
     */
    Dateissued?: number;
    /**
     * Badge description
     */
    Description?: string;
    /**
     * User email
     */
    Email?: string;
    Endorsement?: CoreBadgesGetUserBadgeByHash200ResponseBadgeInnerEndorsement;
    /**
     * Expire date
     */
    Expiredate?: number;
    /**
     * Expire period
     */
    Expireperiod?: number;
    /**
     * Badge id
     */
    Id?: number;
    /**
     * Email of the image author
     */
    Imageauthoremail?: string;
    /**
     * Name of the image author
     */
    Imageauthorname?: string;
    /**
     * URL of the image author
     */
    Imageauthorurl?: string;
    /**
     * Caption of the image
     */
    Imagecaption?: string;
    /**
     * Issued id
     */
    Issuedid?: number;
    /**
     * Issuer contact
     */
    Issuercontact?: string;
    /**
     * Issuer name
     */
    Issuername?: string;
    /**
     * Issuer URL
     */
    Issuerurl?: string;
    /**
     * Language
     */
    Language?: string;
    /**
     * Message
     */
    Message?: string;
    /**
     * Message subject
     */
    Messagesubject?: string;
    /**
     * Badge name
     */
    Name?: string;
    /**
     * Next cron
     */
    Nextcron?: number;
    /**
     * Whether to notify when badge is awarded
     */
    Notification?: number;
    Relatedbadges?: Array<CoreBadgesGetUserBadgeByHash200ResponseBadgeInnerRelatedbadgesInner>;
    /**
     * Status
     */
    Status?: number;
    /**
     * Time created
     */
    Timecreated?: number;
    /**
     * Time modified
     */
    Timemodified?: number;
    /**
     * Type
     */
    Type?: number;
    /**
     * Unique hash
     */
    Uniquehash?: string;
    /**
     * User created
     */
    Usercreated?: number;
    /**
     * User modified
     */
    Usermodified?: number;
    /**
     * Version
     */
    Version?: string;
    /**
     * Visible
     */
    Visible?: number;
}
