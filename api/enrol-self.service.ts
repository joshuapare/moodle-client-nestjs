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
import { EnrolSelfEnrolUser200Response } from '../model/enrol-self-enrol-user-200-response';
import { EnrolSelfEnrolUserRequest } from '../model/enrol-self-enrol-user-request';
import { EnrolSelfGetInstanceInfo200Response } from '../model/enrol-self-get-instance-info-200-response';
import { EnrolSelfGetInstanceInfoRequest } from '../model/enrol-self-get-instance-info-request';
import { ErrorResponse } from '../model/error-response';
import { Configuration } from '../configuration';


@Injectable()
export class EnrolSelfService {

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
     * Self enrol the current user in the given course.
     * Self enrol the current user in the given course.
     * @param enrolSelfEnrolUserRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public enrolSelfEnrolUser(enrolSelfEnrolUserRequest: EnrolSelfEnrolUserRequest, ): Observable<AxiosResponse<EnrolSelfEnrolUser200Response>>;
    public enrolSelfEnrolUser(enrolSelfEnrolUserRequest: EnrolSelfEnrolUserRequest, ): Observable<any> {

        if (enrolSelfEnrolUserRequest === null || enrolSelfEnrolUserRequest === undefined) {
            throw new Error('Required parameter enrolSelfEnrolUserRequest was null or undefined when calling enrolSelfEnrolUser.');
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
        return this.httpClient.post<EnrolSelfEnrolUser200Response>(`${this.basePath}/enrol_self_enrol_user`,
            enrolSelfEnrolUserRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * self enrolment instance information.
     * self enrolment instance information.
     * @param enrolSelfGetInstanceInfoRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public enrolSelfGetInstanceInfo(enrolSelfGetInstanceInfoRequest: EnrolSelfGetInstanceInfoRequest, ): Observable<AxiosResponse<EnrolSelfGetInstanceInfo200Response>>;
    public enrolSelfGetInstanceInfo(enrolSelfGetInstanceInfoRequest: EnrolSelfGetInstanceInfoRequest, ): Observable<any> {

        if (enrolSelfGetInstanceInfoRequest === null || enrolSelfGetInstanceInfoRequest === undefined) {
            throw new Error('Required parameter enrolSelfGetInstanceInfoRequest was null or undefined when calling enrolSelfGetInstanceInfo.');
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
        return this.httpClient.post<EnrolSelfGetInstanceInfo200Response>(`${this.basePath}/enrol_self_get_instance_info`,
            enrolSelfGetInstanceInfoRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
}
