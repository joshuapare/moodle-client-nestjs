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


export interface ModLessonFinishAttemptRequest { 
    /**
     * Lesson instance id.
     */
    Lessonid: number;
    /**
     * If the user run out of time.
     */
    Outoftime?: boolean;
    /**
     * Optional password (the lesson may be protected).
     */
    Password?: string;
    /**
     * If we want to review just after finishing (1 hour margin).
     */
    Review?: boolean;
}

