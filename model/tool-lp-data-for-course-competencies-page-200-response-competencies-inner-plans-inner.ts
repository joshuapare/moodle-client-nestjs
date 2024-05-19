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
import { CoreCompetencyCreateTemplate200Response } from './core-competency-create-template-200-response';
import { CoreCompetencyGradeCompetency200ResponseActionuser } from './core-competency-grade-competency-200-response-actionuser';
import { CoreCompetencyReadPlan200ResponseCommentarea } from './core-competency-read-plan-200-response-commentarea';


export interface ToolLpDataForCourseCompetenciesPage200ResponseCompetenciesInnerPlansInner { 
    /**
     * canbeedited
     */
    Canbeedited?: boolean;
    /**
     * canmanage
     */
    Canmanage?: boolean;
    /**
     * canrequestreview
     */
    Canrequestreview?: boolean;
    /**
     * canreview
     */
    Canreview?: boolean;
    Commentarea?: CoreCompetencyReadPlan200ResponseCommentarea;
    /**
     * description
     */
    Description?: string;
    /**
     * description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN)
     */
    Descriptionformat?: number;
    /**
     * duedate
     */
    Duedate?: number;
    /**
     * duedateformatted
     */
    Duedateformatted?: string;
    /**
     * id
     */
    Id?: number;
    /**
     * isactive
     */
    Isactive?: boolean;
    /**
     * isapproveallowed
     */
    Isapproveallowed?: boolean;
    /**
     * isbasedontemplate
     */
    Isbasedontemplate?: boolean;
    /**
     * iscancelreviewrequestallowed
     */
    Iscancelreviewrequestallowed?: boolean;
    /**
     * iscompleteallowed
     */
    Iscompleteallowed?: boolean;
    /**
     * iscompleted
     */
    Iscompleted?: boolean;
    /**
     * isdraft
     */
    Isdraft?: boolean;
    /**
     * isinreview
     */
    Isinreview?: boolean;
    /**
     * isreopenallowed
     */
    Isreopenallowed?: boolean;
    /**
     * isrequestreviewallowed
     */
    Isrequestreviewallowed?: boolean;
    /**
     * isstartreviewallowed
     */
    Isstartreviewallowed?: boolean;
    /**
     * isstopreviewallowed
     */
    Isstopreviewallowed?: boolean;
    /**
     * isunapproveallowed
     */
    Isunapproveallowed?: boolean;
    /**
     * isunlinkallowed
     */
    Isunlinkallowed?: boolean;
    /**
     * iswaitingforreview
     */
    Iswaitingforreview?: boolean;
    /**
     * name
     */
    Name?: string;
    /**
     * origtemplateid
     */
    Origtemplateid?: number;
    Reviewer?: CoreCompetencyGradeCompetency200ResponseActionuser;
    /**
     * reviewerid
     */
    Reviewerid?: number;
    /**
     * status
     */
    Status?: number;
    /**
     * statusname
     */
    Statusname?: string;
    Template?: CoreCompetencyCreateTemplate200Response;
    /**
     * templateid
     */
    Templateid?: number;
    /**
     * timecreated
     */
    Timecreated?: number;
    /**
     * timemodified
     */
    Timemodified?: number;
    /**
     * url
     */
    Url?: string;
    /**
     * userid
     */
    Userid?: number;
    /**
     * usermodified
     */
    Usermodified?: number;
}

