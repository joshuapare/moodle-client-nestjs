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


export interface EnrolMetaAddInstancesRequestInstancesInner { 
    /**
     * ID of the course where meta enrolment is linked to.
     */
    Courseid?: string;
    /**
     * Creates group in meta course named after linked course and puts all enrolled users in this group
     */
    Creategroup?: boolean;
    /**
     * ID of the course where meta enrolment is added.
     */
    Metacourseid?: number;
}

