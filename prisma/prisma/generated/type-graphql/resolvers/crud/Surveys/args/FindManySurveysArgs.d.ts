import { SurveysOrderByWithRelationInput } from "../../../inputs/SurveysOrderByWithRelationInput";
import { SurveysWhereInput } from "../../../inputs/SurveysWhereInput";
import { SurveysWhereUniqueInput } from "../../../inputs/SurveysWhereUniqueInput";
export declare class FindManySurveysArgs {
    where?: SurveysWhereInput | undefined;
    orderBy?: SurveysOrderByWithRelationInput[] | undefined;
    cursor?: SurveysWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "assigned_to" | "status" | "description" | "question" | "answer" | "submit_text" | "satisfied_text" | "neither_text" | "dissatisfied_text"> | undefined;
}
