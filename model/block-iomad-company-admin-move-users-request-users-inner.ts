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


export interface BlockIomadCompanyAdminMoveUsersRequestUsersInner { 
    /**
     * User company ID
     */
    Companyid?: number;
    /**
     * User company department ID
     */
    Departmentid?: number;
    /**
     * User manager type 0 => User, 1 => company manager 2 => department manager
     */
    Managertype?: number;
    /**
     * User ID
     */
    Userid?: number;
}

