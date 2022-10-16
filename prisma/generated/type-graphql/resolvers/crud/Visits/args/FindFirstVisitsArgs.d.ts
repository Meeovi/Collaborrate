import { VisitsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/VisitsOrderByWithRelationAndSearchRelevanceInput";
import { VisitsWhereInput } from "../../../inputs/VisitsWhereInput";
import { VisitsWhereUniqueInput } from "../../../inputs/VisitsWhereUniqueInput";
export declare class FindFirstVisitsArgs {
    where?: VisitsWhereInput | undefined;
    orderBy?: VisitsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: VisitsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "location" | "username" | "reason" | "content" | "emergency" | "start_date" | "end_date" | "task" | "meeting"> | undefined;
}
