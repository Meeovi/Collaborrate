import { ChecklistOrderByWithAggregationInput } from "../../../inputs/ChecklistOrderByWithAggregationInput";
import { ChecklistScalarWhereWithAggregatesInput } from "../../../inputs/ChecklistScalarWhereWithAggregatesInput";
import { ChecklistWhereInput } from "../../../inputs/ChecklistWhereInput";
export declare class GroupByChecklistArgs {
    where?: ChecklistWhereInput | undefined;
    orderBy?: ChecklistOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "username" | "location" | "regional_manager" | "manager" | "description" | "ticket" | "project" | "region" | "country" | "media" | "prod_id" | "trainings" | "task" | "type">;
    having?: ChecklistScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
