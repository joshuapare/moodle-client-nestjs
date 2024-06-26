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
import { GradingformRubricGraderGradingpanelStore200ResponseGradeCriteriaInner } from './gradingform-rubric-grader-gradingpanel-store-200-response-grade-criteria-inner';


export interface GradingformRubricGraderGradingpanelStore200ResponseGrade { 
    /**
     * Can the user edit this
     */
    Canedit: boolean;
    Criteria: Array<GradingformRubricGraderGradingpanelStore200ResponseGradeCriteriaInner>;
    /**
     * The assumed grader of this grading instance
     */
    Gradedby: string;
    /**
     * The id of the current grading instance
     */
    Instanceid: number;
    /**
     * Max possible grade
     */
    Maxgrade: string;
    /**
     * The mode i.e. evaluate editable
     */
    Rubricmode: string;
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

