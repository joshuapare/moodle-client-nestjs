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


export interface ModAssignGetAssignmentsRequest { 
    Capabilities?: Array<object>;
    Courseids?: Array<object>;
    /**
     * whether to return courses that the user can see                                                                     even if is not enroled in. This requires the parameter courseids                                                                     to not be empty.
     */
    Includenotenrolledcourses?: boolean;
}

