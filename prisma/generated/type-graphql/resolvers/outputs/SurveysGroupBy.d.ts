import { SurveysAvgAggregate } from "../outputs/SurveysAvgAggregate";
import { SurveysCountAggregate } from "../outputs/SurveysCountAggregate";
import { SurveysMaxAggregate } from "../outputs/SurveysMaxAggregate";
import { SurveysMinAggregate } from "../outputs/SurveysMinAggregate";
import { SurveysSumAggregate } from "../outputs/SurveysSumAggregate";
export declare class SurveysGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    assigned_to: string | null;
    status: string | null;
    description: string | null;
    question: string | null;
    answer: string | null;
    submit_text: string | null;
    satisfied_text: string | null;
    neither_text: string | null;
    dissatisfied_text: string | null;
    _count: SurveysCountAggregate | null;
    _avg: SurveysAvgAggregate | null;
    _sum: SurveysSumAggregate | null;
    _min: SurveysMinAggregate | null;
    _max: SurveysMaxAggregate | null;
}
