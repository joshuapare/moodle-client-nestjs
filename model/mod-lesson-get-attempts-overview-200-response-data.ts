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
import { ModLessonGetAttemptsOverview200ResponseDataStudentsInner } from './mod-lesson-get-attempts-overview-200-response-data-students-inner';


export interface ModLessonGetAttemptsOverview200ResponseData { 
    /**
     * Average score.
     */
    Avescore: number;
    /**
     * Average time (spent in taking the lesson).
     */
    Avetime: number;
    /**
     * High score.
     */
    Highscore: number;
    /**
     * High time.
     */
    Hightime: number;
    /**
     * True if the lesson was scored.
     */
    Lessonscored: boolean;
    /**
     * Low score.
     */
    Lowscore: number;
    /**
     * Low time.
     */
    Lowtime: number;
    /**
     * Number of attempts.
     */
    Numofattempts: number;
    Students?: Array<ModLessonGetAttemptsOverview200ResponseDataStudentsInner>;
}
