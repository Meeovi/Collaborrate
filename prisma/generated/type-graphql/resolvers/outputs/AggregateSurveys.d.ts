import { SurveysAvgAggregate } from "../outputs/SurveysAvgAggregate";
import { SurveysCountAggregate } from "../outputs/SurveysCountAggregate";
import { SurveysMaxAggregate } from "../outputs/SurveysMaxAggregate";
import { SurveysMinAggregate } from "../outputs/SurveysMinAggregate";
import { SurveysSumAggregate } from "../outputs/SurveysSumAggregate";
export declare class AggregateSurveys {
    _count: SurveysCountAggregate | null;
    _avg: SurveysAvgAggregate | null;
    _sum: SurveysSumAggregate | null;
    _min: SurveysMinAggregate | null;
    _max: SurveysMaxAggregate | null;
}
