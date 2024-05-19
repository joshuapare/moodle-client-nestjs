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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { CoreCalendarDeleteSubscription200Response } from '../model/core-calendar-delete-subscription-200-response';
import { ErrorResponse } from '../model/error-response';
import { ModBigbluebuttonbnGetBigbluebuttonbnsByCoursesRequest } from '../model/mod-bigbluebuttonbn-get-bigbluebuttonbns-by-courses-request';
import { ModFeedbackGetAnalysis200Response } from '../model/mod-feedback-get-analysis-200-response';
import { ModFeedbackGetAnalysisRequest } from '../model/mod-feedback-get-analysis-request';
import { ModFeedbackGetCurrentCompletedTmp200Response } from '../model/mod-feedback-get-current-completed-tmp-200-response';
import { ModFeedbackGetCurrentCompletedTmpRequest } from '../model/mod-feedback-get-current-completed-tmp-request';
import { ModFeedbackGetFeedbackAccessInformation200Response } from '../model/mod-feedback-get-feedback-access-information-200-response';
import { ModFeedbackGetFeedbackAccessInformationRequest } from '../model/mod-feedback-get-feedback-access-information-request';
import { ModFeedbackGetFeedbacksByCourses200Response } from '../model/mod-feedback-get-feedbacks-by-courses-200-response';
import { ModFeedbackGetFinishedResponses200Response } from '../model/mod-feedback-get-finished-responses-200-response';
import { ModFeedbackGetFinishedResponsesRequest } from '../model/mod-feedback-get-finished-responses-request';
import { ModFeedbackGetItems200Response } from '../model/mod-feedback-get-items-200-response';
import { ModFeedbackGetLastCompleted200Response } from '../model/mod-feedback-get-last-completed-200-response';
import { ModFeedbackGetNonRespondents200Response } from '../model/mod-feedback-get-non-respondents-200-response';
import { ModFeedbackGetNonRespondentsRequest } from '../model/mod-feedback-get-non-respondents-request';
import { ModFeedbackGetPageItems200Response } from '../model/mod-feedback-get-page-items-200-response';
import { ModFeedbackGetPageItemsRequest } from '../model/mod-feedback-get-page-items-request';
import { ModFeedbackGetResponsesAnalysis200Response } from '../model/mod-feedback-get-responses-analysis-200-response';
import { ModFeedbackGetResponsesAnalysisRequest } from '../model/mod-feedback-get-responses-analysis-request';
import { ModFeedbackGetUnfinishedResponses200Response } from '../model/mod-feedback-get-unfinished-responses-200-response';
import { ModFeedbackLaunchFeedback200Response } from '../model/mod-feedback-launch-feedback-200-response';
import { ModFeedbackProcessPage200Response } from '../model/mod-feedback-process-page-200-response';
import { ModFeedbackProcessPageRequest } from '../model/mod-feedback-process-page-request';
import { ModFeedbackViewFeedbackRequest } from '../model/mod-feedback-view-feedback-request';
import { Configuration } from '../configuration';


@Injectable()
export class ModFeedbackService {

    protected basePath = 'https://localhost/webservice/restful/server.php';
    public defaultHeaders: Record<string,string> = {};
    public configuration = new Configuration();

    constructor(protected httpClient: HttpService, @Optional() configuration: Configuration) {
        this.configuration = configuration || this.configuration;
        this.basePath = configuration?.basePath || this.basePath;
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        return consumes.includes(form);
    }

    /**
     * Retrieves the feedback analysis.
     * Retrieves the feedback analysis.
     * @param modFeedbackGetAnalysisRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public modFeedbackGetAnalysis(modFeedbackGetAnalysisRequest: ModFeedbackGetAnalysisRequest, ): Observable<AxiosResponse<ModFeedbackGetAnalysis200Response>>;
    public modFeedbackGetAnalysis(modFeedbackGetAnalysisRequest: ModFeedbackGetAnalysisRequest, ): Observable<any> {

        if (modFeedbackGetAnalysisRequest === null || modFeedbackGetAnalysisRequest === undefined) {
            throw new Error('Required parameter modFeedbackGetAnalysisRequest was null or undefined when calling modFeedbackGetAnalysis.');
        }

        let headers = {...this.defaultHeaders};

        // authentication (apiKey) required
        if (this.configuration.apiKeys?.["Authorization"]) {
            headers['Authorization'] = this.configuration.apiKeys["Authorization"];
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return this.httpClient.post<ModFeedbackGetAnalysis200Response>(`${this.basePath}/mod_feedback_get_analysis`,
            modFeedbackGetAnalysisRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Returns the temporary completion record for the current user.
     * Returns the temporary completion record for the current user.
     * @param modFeedbackGetCurrentCompletedTmpRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public modFeedbackGetCurrentCompletedTmp(modFeedbackGetCurrentCompletedTmpRequest: ModFeedbackGetCurrentCompletedTmpRequest, ): Observable<AxiosResponse<ModFeedbackGetCurrentCompletedTmp200Response>>;
    public modFeedbackGetCurrentCompletedTmp(modFeedbackGetCurrentCompletedTmpRequest: ModFeedbackGetCurrentCompletedTmpRequest, ): Observable<any> {

        if (modFeedbackGetCurrentCompletedTmpRequest === null || modFeedbackGetCurrentCompletedTmpRequest === undefined) {
            throw new Error('Required parameter modFeedbackGetCurrentCompletedTmpRequest was null or undefined when calling modFeedbackGetCurrentCompletedTmp.');
        }

        let headers = {...this.defaultHeaders};

        // authentication (apiKey) required
        if (this.configuration.apiKeys?.["Authorization"]) {
            headers['Authorization'] = this.configuration.apiKeys["Authorization"];
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return this.httpClient.post<ModFeedbackGetCurrentCompletedTmp200Response>(`${this.basePath}/mod_feedback_get_current_completed_tmp`,
            modFeedbackGetCurrentCompletedTmpRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Return access information for a given feedback.
     * Return access information for a given feedback.
     * @param modFeedbackGetFeedbackAccessInformationRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public modFeedbackGetFeedbackAccessInformation(modFeedbackGetFeedbackAccessInformationRequest: ModFeedbackGetFeedbackAccessInformationRequest, ): Observable<AxiosResponse<ModFeedbackGetFeedbackAccessInformation200Response>>;
    public modFeedbackGetFeedbackAccessInformation(modFeedbackGetFeedbackAccessInformationRequest: ModFeedbackGetFeedbackAccessInformationRequest, ): Observable<any> {

        if (modFeedbackGetFeedbackAccessInformationRequest === null || modFeedbackGetFeedbackAccessInformationRequest === undefined) {
            throw new Error('Required parameter modFeedbackGetFeedbackAccessInformationRequest was null or undefined when calling modFeedbackGetFeedbackAccessInformation.');
        }

        let headers = {...this.defaultHeaders};

        // authentication (apiKey) required
        if (this.configuration.apiKeys?.["Authorization"]) {
            headers['Authorization'] = this.configuration.apiKeys["Authorization"];
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return this.httpClient.post<ModFeedbackGetFeedbackAccessInformation200Response>(`${this.basePath}/mod_feedback_get_feedback_access_information`,
            modFeedbackGetFeedbackAccessInformationRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Returns a list of feedbacks in a provided list of courses, if no list is provided all feedbacks that                             the user can view will be returned.
     * Returns a list of feedbacks in a provided list of courses, if no list is provided all feedbacks that                             the user can view will be returned.
     * @param modBigbluebuttonbnGetBigbluebuttonbnsByCoursesRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public modFeedbackGetFeedbacksByCourses(modBigbluebuttonbnGetBigbluebuttonbnsByCoursesRequest: ModBigbluebuttonbnGetBigbluebuttonbnsByCoursesRequest, ): Observable<AxiosResponse<ModFeedbackGetFeedbacksByCourses200Response>>;
    public modFeedbackGetFeedbacksByCourses(modBigbluebuttonbnGetBigbluebuttonbnsByCoursesRequest: ModBigbluebuttonbnGetBigbluebuttonbnsByCoursesRequest, ): Observable<any> {

        if (modBigbluebuttonbnGetBigbluebuttonbnsByCoursesRequest === null || modBigbluebuttonbnGetBigbluebuttonbnsByCoursesRequest === undefined) {
            throw new Error('Required parameter modBigbluebuttonbnGetBigbluebuttonbnsByCoursesRequest was null or undefined when calling modFeedbackGetFeedbacksByCourses.');
        }

        let headers = {...this.defaultHeaders};

        // authentication (apiKey) required
        if (this.configuration.apiKeys?.["Authorization"]) {
            headers['Authorization'] = this.configuration.apiKeys["Authorization"];
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return this.httpClient.post<ModFeedbackGetFeedbacksByCourses200Response>(`${this.basePath}/mod_feedback_get_feedbacks_by_courses`,
            modBigbluebuttonbnGetBigbluebuttonbnsByCoursesRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Retrieves responses from the last finished attempt.
     * Retrieves responses from the last finished attempt.
     * @param modFeedbackGetFinishedResponsesRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public modFeedbackGetFinishedResponses(modFeedbackGetFinishedResponsesRequest: ModFeedbackGetFinishedResponsesRequest, ): Observable<AxiosResponse<ModFeedbackGetFinishedResponses200Response>>;
    public modFeedbackGetFinishedResponses(modFeedbackGetFinishedResponsesRequest: ModFeedbackGetFinishedResponsesRequest, ): Observable<any> {

        if (modFeedbackGetFinishedResponsesRequest === null || modFeedbackGetFinishedResponsesRequest === undefined) {
            throw new Error('Required parameter modFeedbackGetFinishedResponsesRequest was null or undefined when calling modFeedbackGetFinishedResponses.');
        }

        let headers = {...this.defaultHeaders};

        // authentication (apiKey) required
        if (this.configuration.apiKeys?.["Authorization"]) {
            headers['Authorization'] = this.configuration.apiKeys["Authorization"];
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return this.httpClient.post<ModFeedbackGetFinishedResponses200Response>(`${this.basePath}/mod_feedback_get_finished_responses`,
            modFeedbackGetFinishedResponsesRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Returns the items (questions) in the given feedback.
     * Returns the items (questions) in the given feedback.
     * @param modFeedbackGetCurrentCompletedTmpRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public modFeedbackGetItems(modFeedbackGetCurrentCompletedTmpRequest: ModFeedbackGetCurrentCompletedTmpRequest, ): Observable<AxiosResponse<ModFeedbackGetItems200Response>>;
    public modFeedbackGetItems(modFeedbackGetCurrentCompletedTmpRequest: ModFeedbackGetCurrentCompletedTmpRequest, ): Observable<any> {

        if (modFeedbackGetCurrentCompletedTmpRequest === null || modFeedbackGetCurrentCompletedTmpRequest === undefined) {
            throw new Error('Required parameter modFeedbackGetCurrentCompletedTmpRequest was null or undefined when calling modFeedbackGetItems.');
        }

        let headers = {...this.defaultHeaders};

        // authentication (apiKey) required
        if (this.configuration.apiKeys?.["Authorization"]) {
            headers['Authorization'] = this.configuration.apiKeys["Authorization"];
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return this.httpClient.post<ModFeedbackGetItems200Response>(`${this.basePath}/mod_feedback_get_items`,
            modFeedbackGetCurrentCompletedTmpRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Retrieves the last completion record for the current user.
     * Retrieves the last completion record for the current user.
     * @param modFeedbackGetCurrentCompletedTmpRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public modFeedbackGetLastCompleted(modFeedbackGetCurrentCompletedTmpRequest: ModFeedbackGetCurrentCompletedTmpRequest, ): Observable<AxiosResponse<ModFeedbackGetLastCompleted200Response>>;
    public modFeedbackGetLastCompleted(modFeedbackGetCurrentCompletedTmpRequest: ModFeedbackGetCurrentCompletedTmpRequest, ): Observable<any> {

        if (modFeedbackGetCurrentCompletedTmpRequest === null || modFeedbackGetCurrentCompletedTmpRequest === undefined) {
            throw new Error('Required parameter modFeedbackGetCurrentCompletedTmpRequest was null or undefined when calling modFeedbackGetLastCompleted.');
        }

        let headers = {...this.defaultHeaders};

        // authentication (apiKey) required
        if (this.configuration.apiKeys?.["Authorization"]) {
            headers['Authorization'] = this.configuration.apiKeys["Authorization"];
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return this.httpClient.post<ModFeedbackGetLastCompleted200Response>(`${this.basePath}/mod_feedback_get_last_completed`,
            modFeedbackGetCurrentCompletedTmpRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Retrieves a list of students who didn\&#39;t submit the feedback.
     * Retrieves a list of students who didn\&#39;t submit the feedback.
     * @param modFeedbackGetNonRespondentsRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public modFeedbackGetNonRespondents(modFeedbackGetNonRespondentsRequest: ModFeedbackGetNonRespondentsRequest, ): Observable<AxiosResponse<ModFeedbackGetNonRespondents200Response>>;
    public modFeedbackGetNonRespondents(modFeedbackGetNonRespondentsRequest: ModFeedbackGetNonRespondentsRequest, ): Observable<any> {

        if (modFeedbackGetNonRespondentsRequest === null || modFeedbackGetNonRespondentsRequest === undefined) {
            throw new Error('Required parameter modFeedbackGetNonRespondentsRequest was null or undefined when calling modFeedbackGetNonRespondents.');
        }

        let headers = {...this.defaultHeaders};

        // authentication (apiKey) required
        if (this.configuration.apiKeys?.["Authorization"]) {
            headers['Authorization'] = this.configuration.apiKeys["Authorization"];
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return this.httpClient.post<ModFeedbackGetNonRespondents200Response>(`${this.basePath}/mod_feedback_get_non_respondents`,
            modFeedbackGetNonRespondentsRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Get a single feedback page items.
     * Get a single feedback page items.
     * @param modFeedbackGetPageItemsRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public modFeedbackGetPageItems(modFeedbackGetPageItemsRequest: ModFeedbackGetPageItemsRequest, ): Observable<AxiosResponse<ModFeedbackGetPageItems200Response>>;
    public modFeedbackGetPageItems(modFeedbackGetPageItemsRequest: ModFeedbackGetPageItemsRequest, ): Observable<any> {

        if (modFeedbackGetPageItemsRequest === null || modFeedbackGetPageItemsRequest === undefined) {
            throw new Error('Required parameter modFeedbackGetPageItemsRequest was null or undefined when calling modFeedbackGetPageItems.');
        }

        let headers = {...this.defaultHeaders};

        // authentication (apiKey) required
        if (this.configuration.apiKeys?.["Authorization"]) {
            headers['Authorization'] = this.configuration.apiKeys["Authorization"];
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return this.httpClient.post<ModFeedbackGetPageItems200Response>(`${this.basePath}/mod_feedback_get_page_items`,
            modFeedbackGetPageItemsRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Return the feedback user responses analysis.
     * Return the feedback user responses analysis.
     * @param modFeedbackGetResponsesAnalysisRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public modFeedbackGetResponsesAnalysis(modFeedbackGetResponsesAnalysisRequest: ModFeedbackGetResponsesAnalysisRequest, ): Observable<AxiosResponse<ModFeedbackGetResponsesAnalysis200Response>>;
    public modFeedbackGetResponsesAnalysis(modFeedbackGetResponsesAnalysisRequest: ModFeedbackGetResponsesAnalysisRequest, ): Observable<any> {

        if (modFeedbackGetResponsesAnalysisRequest === null || modFeedbackGetResponsesAnalysisRequest === undefined) {
            throw new Error('Required parameter modFeedbackGetResponsesAnalysisRequest was null or undefined when calling modFeedbackGetResponsesAnalysis.');
        }

        let headers = {...this.defaultHeaders};

        // authentication (apiKey) required
        if (this.configuration.apiKeys?.["Authorization"]) {
            headers['Authorization'] = this.configuration.apiKeys["Authorization"];
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return this.httpClient.post<ModFeedbackGetResponsesAnalysis200Response>(`${this.basePath}/mod_feedback_get_responses_analysis`,
            modFeedbackGetResponsesAnalysisRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Retrieves responses from the current unfinished attempt.
     * Retrieves responses from the current unfinished attempt.
     * @param modFeedbackGetFinishedResponsesRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public modFeedbackGetUnfinishedResponses(modFeedbackGetFinishedResponsesRequest: ModFeedbackGetFinishedResponsesRequest, ): Observable<AxiosResponse<ModFeedbackGetUnfinishedResponses200Response>>;
    public modFeedbackGetUnfinishedResponses(modFeedbackGetFinishedResponsesRequest: ModFeedbackGetFinishedResponsesRequest, ): Observable<any> {

        if (modFeedbackGetFinishedResponsesRequest === null || modFeedbackGetFinishedResponsesRequest === undefined) {
            throw new Error('Required parameter modFeedbackGetFinishedResponsesRequest was null or undefined when calling modFeedbackGetUnfinishedResponses.');
        }

        let headers = {...this.defaultHeaders};

        // authentication (apiKey) required
        if (this.configuration.apiKeys?.["Authorization"]) {
            headers['Authorization'] = this.configuration.apiKeys["Authorization"];
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return this.httpClient.post<ModFeedbackGetUnfinishedResponses200Response>(`${this.basePath}/mod_feedback_get_unfinished_responses`,
            modFeedbackGetFinishedResponsesRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Starts or continues a feedback submission.
     * Starts or continues a feedback submission.
     * @param modFeedbackGetCurrentCompletedTmpRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public modFeedbackLaunchFeedback(modFeedbackGetCurrentCompletedTmpRequest: ModFeedbackGetCurrentCompletedTmpRequest, ): Observable<AxiosResponse<ModFeedbackLaunchFeedback200Response>>;
    public modFeedbackLaunchFeedback(modFeedbackGetCurrentCompletedTmpRequest: ModFeedbackGetCurrentCompletedTmpRequest, ): Observable<any> {

        if (modFeedbackGetCurrentCompletedTmpRequest === null || modFeedbackGetCurrentCompletedTmpRequest === undefined) {
            throw new Error('Required parameter modFeedbackGetCurrentCompletedTmpRequest was null or undefined when calling modFeedbackLaunchFeedback.');
        }

        let headers = {...this.defaultHeaders};

        // authentication (apiKey) required
        if (this.configuration.apiKeys?.["Authorization"]) {
            headers['Authorization'] = this.configuration.apiKeys["Authorization"];
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return this.httpClient.post<ModFeedbackLaunchFeedback200Response>(`${this.basePath}/mod_feedback_launch_feedback`,
            modFeedbackGetCurrentCompletedTmpRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Process a jump between pages.
     * Process a jump between pages.
     * @param modFeedbackProcessPageRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public modFeedbackProcessPage(modFeedbackProcessPageRequest: ModFeedbackProcessPageRequest, ): Observable<AxiosResponse<ModFeedbackProcessPage200Response>>;
    public modFeedbackProcessPage(modFeedbackProcessPageRequest: ModFeedbackProcessPageRequest, ): Observable<any> {

        if (modFeedbackProcessPageRequest === null || modFeedbackProcessPageRequest === undefined) {
            throw new Error('Required parameter modFeedbackProcessPageRequest was null or undefined when calling modFeedbackProcessPage.');
        }

        let headers = {...this.defaultHeaders};

        // authentication (apiKey) required
        if (this.configuration.apiKeys?.["Authorization"]) {
            headers['Authorization'] = this.configuration.apiKeys["Authorization"];
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return this.httpClient.post<ModFeedbackProcessPage200Response>(`${this.basePath}/mod_feedback_process_page`,
            modFeedbackProcessPageRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Trigger the course module viewed event and update the module completion status.
     * Trigger the course module viewed event and update the module completion status.
     * @param modFeedbackViewFeedbackRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public modFeedbackViewFeedback(modFeedbackViewFeedbackRequest: ModFeedbackViewFeedbackRequest, ): Observable<AxiosResponse<CoreCalendarDeleteSubscription200Response>>;
    public modFeedbackViewFeedback(modFeedbackViewFeedbackRequest: ModFeedbackViewFeedbackRequest, ): Observable<any> {

        if (modFeedbackViewFeedbackRequest === null || modFeedbackViewFeedbackRequest === undefined) {
            throw new Error('Required parameter modFeedbackViewFeedbackRequest was null or undefined when calling modFeedbackViewFeedback.');
        }

        let headers = {...this.defaultHeaders};

        // authentication (apiKey) required
        if (this.configuration.apiKeys?.["Authorization"]) {
            headers['Authorization'] = this.configuration.apiKeys["Authorization"];
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return this.httpClient.post<CoreCalendarDeleteSubscription200Response>(`${this.basePath}/mod_feedback_view_feedback`,
            modFeedbackViewFeedbackRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
}
