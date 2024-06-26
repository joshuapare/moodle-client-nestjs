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
import { CoreMessageGetUserMessagePreferences200ResponsePreferencesComponentsInnerNotificationsInnerProcessorsInnerLoggedoff } from './core-message-get-user-message-preferences-200-response-preferences-components-inner-notifications-inner-processors-inner-loggedoff';


export interface CoreMessageGetUserNotificationPreferences200ResponsePreferencesComponentsInnerNotificationsInnerProcessorsInner { 
    /**
     * Display name
     */
    Displayname?: string;
    /**
     * Is enabled?
     */
    Enabled?: boolean;
    /**
     * Is locked by admin?
     */
    Locked?: boolean;
    /**
     * Text to display if locked
     */
    Lockedmessage?: string;
    Loggedin?: CoreMessageGetUserMessagePreferences200ResponsePreferencesComponentsInnerNotificationsInnerProcessorsInnerLoggedoff;
    Loggedoff?: CoreMessageGetUserMessagePreferences200ResponsePreferencesComponentsInnerNotificationsInnerProcessorsInnerLoggedoff;
    /**
     * Processor name
     */
    Name?: string;
    /**
     * Is configured?
     */
    Userconfigured?: number;
}

