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
 * warning
 */
export interface CoreNotesGetNotes200ResponseWarningsInner { 
    /**
     * item is always \'note\'
     */
    Item?: string;
    /**
     * When errorcode is savedfailed the note could not be modified.When errorcode is badparam, an incorrect parameter was provided.When errorcode is badid, the note does not exist
     */
    Itemid?: number;
    /**
     * untranslated english message to explain the warning
     */
    Message?: string;
    /**
     * errorcode can be badparam (incorrect parameter), savedfailed (could not be modified), or badid (note does not exist)
     */
    Warningcode?: string;
}

