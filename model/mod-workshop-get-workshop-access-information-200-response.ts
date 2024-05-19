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
import { AuthEmailSignupUser200ResponseWarningsInner } from './auth-email-signup-user-200-response-warnings-inner';


export interface ModWorkshopGetWorkshopAccessInformation200Response { 
    /**
     * Is the user allowed to create/edit his assessments?
     */
    Assessingallowed: boolean;
    /**
     * Are reviewers allowed to create/edit their assessments of the example submissions?.
     */
    Assessingexamplesallowed: boolean;
    /**
     * Whether the user has the capability mod/workshop:addinstance allowed.
     */
    Canaddinstance: boolean;
    /**
     * Whether the user has the capability mod/workshop:allocate allowed.
     */
    Canallocate: boolean;
    /**
     * Whether the user has the capability mod/workshop:deletesubmissions allowed.
     */
    Candeletesubmissions: boolean;
    /**
     * Whether the user has the capability mod/workshop:editdimensions allowed.
     */
    Caneditdimensions: boolean;
    /**
     * Whether the user has the capability mod/workshop:exportsubmissions allowed.
     */
    Canexportsubmissions: boolean;
    /**
     * Whether the user has the capability mod/workshop:ignoredeadlines allowed.
     */
    Canignoredeadlines: boolean;
    /**
     * Whether the user has the capability mod/workshop:manageexamples allowed.
     */
    Canmanageexamples: boolean;
    /**
     * Whether the user has the capability mod/workshop:overridegrades allowed.
     */
    Canoverridegrades: boolean;
    /**
     * Whether the user has the capability mod/workshop:peerassess allowed.
     */
    Canpeerassess: boolean;
    /**
     * Whether the user has the capability mod/workshop:publishsubmissions allowed.
     */
    Canpublishsubmissions: boolean;
    /**
     * Whether the user has the capability mod/workshop:submit allowed.
     */
    Cansubmit: boolean;
    /**
     * Whether the user has the capability mod/workshop:switchphase allowed.
     */
    Canswitchphase: boolean;
    /**
     * Whether the user has the capability mod/workshop:view allowed.
     */
    Canview: boolean;
    /**
     * Whether the user has the capability mod/workshop:viewallassessments allowed.
     */
    Canviewallassessments: boolean;
    /**
     * Whether the user has the capability mod/workshop:viewallsubmissions allowed.
     */
    Canviewallsubmissions: boolean;
    /**
     * Whether the user has the capability mod/workshop:viewauthornames allowed.
     */
    Canviewauthornames: boolean;
    /**
     * Whether the user has the capability mod/workshop:viewauthorpublished allowed.
     */
    Canviewauthorpublished: boolean;
    /**
     * Whether the user has the capability mod/workshop:viewpublishedsubmissions allowed.
     */
    Canviewpublishedsubmissions: boolean;
    /**
     * Whether the user has the capability mod/workshop:viewreviewernames allowed.
     */
    Canviewreviewernames: boolean;
    /**
     * Is the given user allowed to create their submission?
     */
    Creatingsubmissionallowed: boolean;
    /**
     * Whether the given user has assessed all his required examples before assessment                 (always true if there are not examples to assessor not configured to check before assessment).
     */
    Examplesassessedbeforeassessment: boolean;
    /**
     * Whether the given user has assessed all his required examples before submission                 (always true if there are not examples to assess or not configured to check before submission).
     */
    Examplesassessedbeforesubmission: boolean;
    /**
     * Is the user allowed to modify his existing submission?
     */
    Modifyingsubmissionallowed: boolean;
    Warnings?: Array<AuthEmailSignupUser200ResponseWarningsInner>;
}

