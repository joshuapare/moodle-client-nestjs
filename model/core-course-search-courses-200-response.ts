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
import { CoreCourseSearchCourses200ResponseCoursesInner } from './core-course-search-courses-200-response-courses-inner';
import { AuthEmailSignupUser200ResponseWarningsInner } from './auth-email-signup-user-200-response-warnings-inner';


export interface CoreCourseSearchCourses200Response { 
    Courses: Array<CoreCourseSearchCourses200ResponseCoursesInner>;
    /**
     * total course count
     */
    Total: number;
    Warnings?: Array<AuthEmailSignupUser200ResponseWarningsInner>;
}

