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


export interface ToolXmldbInvokeMoveActionRequest { 
    /**
     * Action
     */
    Action: string;
    /**
     * Plugin that is being edited
     */
    Dir: string;
    /**
     * Field name
     */
    Field?: string;
    /**
     * Index name
     */
    Index?: string;
    /**
     * Key name
     */
    Key?: string;
    /**
     * How many positions to move by (negative - up, positive - down)
     */
    Position: number;
    /**
     * Table name
     */
    Table: string;
}

