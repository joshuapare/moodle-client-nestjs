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


export interface BlockIomadCompanyAdminEnrolUsersRequestEnrolmentsInner { 
    /**
     * The course to enrol the user role in
     */
    Courseid?: number;
    /**
     * Number of items purchased.
     */
    Quantity?: number;
    /**
     * Role to assign to the user
     */
    Roleid?: number;
    /**
     * set to 1 to suspend the enrolment
     */
    Suspend?: number;
    /**
     * Timestamp when the enrolment end
     */
    Timeend?: number;
    /**
     * Timestamp when the enrolment start
     */
    Timestart?: number;
    /**
     * The user that is going to be enrolled
     */
    Userid?: number;
}

