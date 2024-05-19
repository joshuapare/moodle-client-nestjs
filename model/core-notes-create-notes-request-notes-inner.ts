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


export interface CoreNotesCreateNotesRequestNotesInner { 
    /**
     * your own client id for the note. If this id is provided, the fail message id will be returned to you
     */
    Clientnoteid?: string;
    /**
     * course id of the note (in Moodle a note can only be created into a course, even for site and personal notes)
     */
    Courseid?: number;
    /**
     * text format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN)
     */
    Format?: number;
    /**
     * \'personal\', \'course\' or \'site\'
     */
    Publishstate?: string;
    /**
     * the text of the message - text or HTML
     */
    Text?: string;
    /**
     * id of the user the note is about
     */
    Userid?: number;
}

