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


export interface CoreGradesGraderGradingpanelPointStore200ResponseGrade { 
    /**
     * The numeric grade
     */
    Grade: number;
    /**
     * The assumed grader of this grading instance
     */
    Gradedby: string;
    /**
     * Max possible grade
     */
    Maxgrade: string;
    /**
     * The time that the grade was created
     */
    Timecreated: number;
    /**
     * The time that the grade was last updated
     */
    Timemodified: number;
    /**
     * Current user grade
     */
    Usergrade: string;
}

