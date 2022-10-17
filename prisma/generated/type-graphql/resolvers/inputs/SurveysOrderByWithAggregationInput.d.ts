import { SurveysAvgOrderByAggregateInput } from "../inputs/SurveysAvgOrderByAggregateInput";
import { SurveysCountOrderByAggregateInput } from "../inputs/SurveysCountOrderByAggregateInput";
import { SurveysMaxOrderByAggregateInput } from "../inputs/SurveysMaxOrderByAggregateInput";
import { SurveysMinOrderByAggregateInput } from "../inputs/SurveysMinOrderByAggregateInput";
import { SurveysSumOrderByAggregateInput } from "../inputs/SurveysSumOrderByAggregateInput";
export declare class SurveysOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    assigned_to?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    question?: "asc" | "desc" | undefined;
    answer?: "asc" | "desc" | undefined;
    submit_text?: "asc" | "desc" | undefined;
    satisfied_text?: "asc" | "desc" | undefined;
    neither_text?: "asc" | "desc" | undefined;
    dissatisfied_text?: "asc" | "desc" | undefined;
    _count?: SurveysCountOrderByAggregateInput | undefined;
    _avg?: SurveysAvgOrderByAggregateInput | undefined;
    _max?: SurveysMaxOrderByAggregateInput | undefined;
    _min?: SurveysMinOrderByAggregateInput | undefined;
    _sum?: SurveysSumOrderByAggregateInput | undefined;
}
