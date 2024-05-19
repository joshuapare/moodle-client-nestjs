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
import { GradereportOverviewGetCourseGrades200Response } from '../model/gradereport-overview-get-course-grades-200-response';
import { GradereportOverviewGetCourseGradesRequest } from '../model/gradereport-overview-get-course-grades-request';
import { GradereportOverviewViewGradeReportRequest } from '../model/gradereport-overview-view-grade-report-request';
import { Configuration } from '../configuration';


@Injectable()
export class GradereportOverviewService {

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
     * Get the given user courses final grades
     * Get the given user courses final grades
     * @param gradereportOverviewGetCourseGradesRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public gradereportOverviewGetCourseGrades(gradereportOverviewGetCourseGradesRequest: GradereportOverviewGetCourseGradesRequest, ): Observable<AxiosResponse<GradereportOverviewGetCourseGrades200Response>>;
    public gradereportOverviewGetCourseGrades(gradereportOverviewGetCourseGradesRequest: GradereportOverviewGetCourseGradesRequest, ): Observable<any> {

        if (gradereportOverviewGetCourseGradesRequest === null || gradereportOverviewGetCourseGradesRequest === undefined) {
            throw new Error('Required parameter gradereportOverviewGetCourseGradesRequest was null or undefined when calling gradereportOverviewGetCourseGrades.');
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
        return this.httpClient.post<GradereportOverviewGetCourseGrades200Response>(`${this.basePath}/gradereport_overview_get_course_grades`,
            gradereportOverviewGetCourseGradesRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Trigger the report view event
     * Trigger the report view event
     * @param gradereportOverviewViewGradeReportRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public gradereportOverviewViewGradeReport(gradereportOverviewViewGradeReportRequest: GradereportOverviewViewGradeReportRequest, ): Observable<AxiosResponse<CoreCalendarDeleteSubscription200Response>>;
    public gradereportOverviewViewGradeReport(gradereportOverviewViewGradeReportRequest: GradereportOverviewViewGradeReportRequest, ): Observable<any> {

        if (gradereportOverviewViewGradeReportRequest === null || gradereportOverviewViewGradeReportRequest === undefined) {
            throw new Error('Required parameter gradereportOverviewViewGradeReportRequest was null or undefined when calling gradereportOverviewViewGradeReport.');
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
        return this.httpClient.post<CoreCalendarDeleteSubscription200Response>(`${this.basePath}/gradereport_overview_view_grade_report`,
            gradereportOverviewViewGradeReportRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
}
