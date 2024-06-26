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
import { CoreMessageGetUserNotificationPreferences200ResponsePreferencesComponentsInnerNotificationsInnerProcessorsInner } from './core-message-get-user-notification-preferences-200-response-preferences-components-inner-notifications-inner-processors-inner';


export interface CoreMessageGetUserNotificationPreferences200ResponsePreferencesComponentsInnerNotificationsInner { 
    /**
     * Display name
     */
    Displayname?: string;
    /**
     * Preference key
     */
    Preferencekey?: string;
    Processors?: Array<CoreMessageGetUserNotificationPreferences200ResponsePreferencesComponentsInnerNotificationsInnerProcessorsInner>;
}

