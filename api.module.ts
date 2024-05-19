import { DynamicModule, Module, Global, Provider } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AsyncConfiguration, Configuration, ConfigurationFactory } from './configuration';

import { AuthEmailService } from './api/auth-email.service';
import { BlockAccessreviewService } from './api/block-accessreview.service';
import { BlockIomadCompanyAdminService } from './api/block-iomad-company-admin.service';
import { BlockRecentlyaccesseditemsService } from './api/block-recentlyaccesseditems.service';
import { BlockStarredcoursesService } from './api/block-starredcourses.service';
import { EnrolGuestService } from './api/enrol-guest.service';
import { EnrolLicenseService } from './api/enrol-license.service';
import { EnrolManualService } from './api/enrol-manual.service';
import { EnrolMetaService } from './api/enrol-meta.service';
import { EnrolSelfService } from './api/enrol-self.service';
import { GradereportGraderService } from './api/gradereport-grader.service';
import { GradereportOverviewService } from './api/gradereport-overview.service';
import { GradereportSingleviewService } from './api/gradereport-singleview.service';
import { GradereportUserService } from './api/gradereport-user.service';
import { GradingformGuideService } from './api/gradingform-guide.service';
import { GradingformRubricService } from './api/gradingform-rubric.service';
import { LocalIomadLearningpathService } from './api/local-iomad-learningpath.service';
import { MediaVideojsService } from './api/media-videojs.service';
import { MessageAirnotifierService } from './api/message-airnotifier.service';
import { MessagePopupService } from './api/message-popup.service';
import { ModAssignService } from './api/mod-assign.service';
import { ModBigbluebuttonbnService } from './api/mod-bigbluebuttonbn.service';
import { ModBookService } from './api/mod-book.service';
import { ModChatService } from './api/mod-chat.service';
import { ModChoiceService } from './api/mod-choice.service';
import { ModDataService } from './api/mod-data.service';
import { ModFeedbackService } from './api/mod-feedback.service';
import { ModFolderService } from './api/mod-folder.service';
import { ModForumService } from './api/mod-forum.service';
import { ModGlossaryService } from './api/mod-glossary.service';
import { ModH5pactivityService } from './api/mod-h5pactivity.service';
import { ModImscpService } from './api/mod-imscp.service';
import { ModIomadcertificateService } from './api/mod-iomadcertificate.service';
import { ModLabelService } from './api/mod-label.service';
import { ModLessonService } from './api/mod-lesson.service';
import { ModLtiService } from './api/mod-lti.service';
import { ModPageService } from './api/mod-page.service';
import { ModQuizService } from './api/mod-quiz.service';
import { ModResourceService } from './api/mod-resource.service';
import { ModScormService } from './api/mod-scorm.service';
import { ModSurveyService } from './api/mod-survey.service';
import { ModUrlService } from './api/mod-url.service';
import { ModWikiService } from './api/mod-wiki.service';
import { ModWorkshopService } from './api/mod-workshop.service';
import { MoodleService } from './api/moodle.service';
import { PaygwPaypalService } from './api/paygw-paypal.service';
import { QbankColumnsortorderService } from './api/qbank-columnsortorder.service';
import { QbankEditquestionService } from './api/qbank-editquestion.service';
import { QbankTagquestionService } from './api/qbank-tagquestion.service';
import { QbankViewquestiontextService } from './api/qbank-viewquestiontext.service';
import { QuizaccessSebService } from './api/quizaccess-seb.service';
import { ReportCompetencyService } from './api/report-competency.service';
import { ReportInsightsService } from './api/report-insights.service';
import { TinyAutosaveService } from './api/tiny-autosave.service';
import { TinyEquationService } from './api/tiny-equation.service';
import { TinyPremiumService } from './api/tiny-premium.service';
import { ToolAnalyticsService } from './api/tool-analytics.service';
import { ToolBehatService } from './api/tool-behat.service';
import { ToolDataprivacyService } from './api/tool-dataprivacy.service';
import { ToolIomadpolicyService } from './api/tool-iomadpolicy.service';
import { ToolLpService } from './api/tool-lp.service';
import { ToolMobileService } from './api/tool-mobile.service';
import { ToolMoodlenetService } from './api/tool-moodlenet.service';
import { ToolPolicyService } from './api/tool-policy.service';
import { ToolTemplatelibraryService } from './api/tool-templatelibrary.service';
import { ToolUsertoursService } from './api/tool-usertours.service';
import { ToolXmldbService } from './api/tool-xmldb.service';

@Global()
@Module({
  imports:      [ HttpModule ],
  exports:      [
    AuthEmailService,
    BlockAccessreviewService,
    BlockIomadCompanyAdminService,
    BlockRecentlyaccesseditemsService,
    BlockStarredcoursesService,
    EnrolGuestService,
    EnrolLicenseService,
    EnrolManualService,
    EnrolMetaService,
    EnrolSelfService,
    GradereportGraderService,
    GradereportOverviewService,
    GradereportSingleviewService,
    GradereportUserService,
    GradingformGuideService,
    GradingformRubricService,
    LocalIomadLearningpathService,
    MediaVideojsService,
    MessageAirnotifierService,
    MessagePopupService,
    ModAssignService,
    ModBigbluebuttonbnService,
    ModBookService,
    ModChatService,
    ModChoiceService,
    ModDataService,
    ModFeedbackService,
    ModFolderService,
    ModForumService,
    ModGlossaryService,
    ModH5pactivityService,
    ModImscpService,
    ModIomadcertificateService,
    ModLabelService,
    ModLessonService,
    ModLtiService,
    ModPageService,
    ModQuizService,
    ModResourceService,
    ModScormService,
    ModSurveyService,
    ModUrlService,
    ModWikiService,
    ModWorkshopService,
    MoodleService,
    PaygwPaypalService,
    QbankColumnsortorderService,
    QbankEditquestionService,
    QbankTagquestionService,
    QbankViewquestiontextService,
    QuizaccessSebService,
    ReportCompetencyService,
    ReportInsightsService,
    TinyAutosaveService,
    TinyEquationService,
    TinyPremiumService,
    ToolAnalyticsService,
    ToolBehatService,
    ToolDataprivacyService,
    ToolIomadpolicyService,
    ToolLpService,
    ToolMobileService,
    ToolMoodlenetService,
    ToolPolicyService,
    ToolTemplatelibraryService,
    ToolUsertoursService,
    ToolXmldbService
  ],
  providers: [
    AuthEmailService,
    BlockAccessreviewService,
    BlockIomadCompanyAdminService,
    BlockRecentlyaccesseditemsService,
    BlockStarredcoursesService,
    EnrolGuestService,
    EnrolLicenseService,
    EnrolManualService,
    EnrolMetaService,
    EnrolSelfService,
    GradereportGraderService,
    GradereportOverviewService,
    GradereportSingleviewService,
    GradereportUserService,
    GradingformGuideService,
    GradingformRubricService,
    LocalIomadLearningpathService,
    MediaVideojsService,
    MessageAirnotifierService,
    MessagePopupService,
    ModAssignService,
    ModBigbluebuttonbnService,
    ModBookService,
    ModChatService,
    ModChoiceService,
    ModDataService,
    ModFeedbackService,
    ModFolderService,
    ModForumService,
    ModGlossaryService,
    ModH5pactivityService,
    ModImscpService,
    ModIomadcertificateService,
    ModLabelService,
    ModLessonService,
    ModLtiService,
    ModPageService,
    ModQuizService,
    ModResourceService,
    ModScormService,
    ModSurveyService,
    ModUrlService,
    ModWikiService,
    ModWorkshopService,
    MoodleService,
    PaygwPaypalService,
    QbankColumnsortorderService,
    QbankEditquestionService,
    QbankTagquestionService,
    QbankViewquestiontextService,
    QuizaccessSebService,
    ReportCompetencyService,
    ReportInsightsService,
    TinyAutosaveService,
    TinyEquationService,
    TinyPremiumService,
    ToolAnalyticsService,
    ToolBehatService,
    ToolDataprivacyService,
    ToolIomadpolicyService,
    ToolLpService,
    ToolMobileService,
    ToolMoodlenetService,
    ToolPolicyService,
    ToolTemplatelibraryService,
    ToolUsertoursService,
    ToolXmldbService
  ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): DynamicModule {
        return {
            module: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    /**
     * Register the module asynchronously.
     */
    static forRootAsync(options: AsyncConfiguration): DynamicModule {
        const providers = [...this.createAsyncProviders(options)];
        return {
            module: ApiModule,
            imports: options.imports || [],
            providers,
            exports: providers,
        };
    }

    private static createAsyncProviders(options: AsyncConfiguration): Provider[] {
        if (options.useClass) {
            return [
                this.createAsyncConfigurationProvider(options),
                {
                    provide: options.useClass,
                    useClass: options.useClass,
                },
            ];
        }
        return [this.createAsyncConfigurationProvider(options)];
    }

    private static createAsyncConfigurationProvider(
        options: AsyncConfiguration,
    ): Provider {
        if (options.useFactory) {
            return {
                provide: Configuration,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }
        return {
            provide: Configuration,
            useFactory: async (optionsFactory: ConfigurationFactory) =>
                await optionsFactory.createConfiguration(),
            inject: (options.useExisting && [options.useExisting]) || (options.useClass && [options.useClass]) || [],
        };
    }

    constructor( httpService: HttpService) { }
}
