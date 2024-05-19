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
import { CoreOutputLoadTemplateWithDependencies200ResponseTemplatesInner } from './core-output-load-template-with-dependencies-200-response-templates-inner';
import { CoreOutputLoadTemplateWithDependencies200ResponseStringsInner } from './core-output-load-template-with-dependencies-200-response-strings-inner';


export interface CoreOutputLoadTemplateWithDependencies200Response { 
    Strings: Array<CoreOutputLoadTemplateWithDependencies200ResponseStringsInner>;
    Templates: Array<CoreOutputLoadTemplateWithDependencies200ResponseTemplatesInner>;
}

