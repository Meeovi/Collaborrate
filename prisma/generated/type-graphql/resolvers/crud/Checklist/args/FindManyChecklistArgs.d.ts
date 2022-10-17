import { ChecklistOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ChecklistOrderByWithRelationAndSearchRelevanceInput";
import { ChecklistWhereInput } from "../../../inputs/ChecklistWhereInput";
import { ChecklistWhereUniqueInput } from "../../../inputs/ChecklistWhereUniqueInput";
export declare class FindManyChecklistArgs {
    where?: ChecklistWhereInput | undefined;
    orderBy?: ChecklistOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ChecklistWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "username" | "location" | "regional_manager" | "manager" | "description" | "ticket" | "project" | "region" | "country" | "media" | "prod_id" | "trainings" | "task" | "type"> | undefined;
}
