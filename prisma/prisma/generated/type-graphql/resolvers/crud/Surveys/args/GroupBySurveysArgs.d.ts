import { SurveysOrderByWithAggregationInput } from "../../../inputs/SurveysOrderByWithAggregationInput";
import { SurveysScalarWhereWithAggregatesInput } from "../../../inputs/SurveysScalarWhereWithAggregatesInput";
import { SurveysWhereInput } from "../../../inputs/SurveysWhereInput";
export declare class GroupBySurveysArgs {
    where?: SurveysWhereInput | undefined;
    orderBy?: SurveysOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "assigned_to" | "status" | "description" | "question" | "answer" | "submit_text" | "satisfied_text" | "neither_text" | "dissatisfied_text">;
    having?: SurveysScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
