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


/**
 * message
 */
export interface MessagePopupGetPopupNotifications200ResponseNotificationsInner { 
    /**
     * The component that generated the notification
     */
    Component?: string;
    /**
     * Context URL
     */
    Contexturl?: string;
    /**
     * Context URL link name
     */
    Contexturlname?: string;
    /**
     * Custom data to be passed to the message processor.                                 The data here is serialised using json_encode().
     */
    Customdata?: string;
    /**
     * notification deletion status
     */
    Deleted?: boolean;
    /**
     * The type of notification
     */
    Eventtype?: string;
    /**
     * The message
     */
    Fullmessage?: string;
    /**
     * fullmessage format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN)
     */
    Fullmessageformat?: number;
    /**
     * The message in html
     */
    Fullmessagehtml?: string;
    /**
     * URL for notification icon
     */
    Iconurl?: string;
    /**
     * Notification id (this is not guaranteed to be unique                                 within this result set)
     */
    Id?: number;
    /**
     * notification read status
     */
    Read?: boolean;
    /**
     * The notification subject shortened                                 with ellipsis
     */
    Shortenedsubject?: string;
    /**
     * The shorten message
     */
    Smallmessage?: string;
    /**
     * The notification subject
     */
    Subject?: string;
    /**
     * The message text formated
     */
    Text?: string;
    /**
     * Time created
     */
    Timecreated?: number;
    /**
     * Time created in a pretty format
     */
    Timecreatedpretty?: string;
    /**
     * Time read
     */
    Timeread?: number;
    /**
     * User from id
     */
    Useridfrom?: number;
    /**
     * User to id
     */
    Useridto?: number;
}

