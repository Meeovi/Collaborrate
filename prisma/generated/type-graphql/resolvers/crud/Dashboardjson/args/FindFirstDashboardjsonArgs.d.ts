import { DashboardjsonOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DashboardjsonOrderByWithRelationAndSearchRelevanceInput";
import { DashboardjsonWhereInput } from "../../../inputs/DashboardjsonWhereInput";
import { DashboardjsonWhereUniqueInput } from "../../../inputs/DashboardjsonWhereUniqueInput";
export declare class FindFirstDashboardjsonArgs {
    where?: DashboardjsonWhereInput | undefined;
    orderBy?: DashboardjsonOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: DashboardjsonWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "url" | "description" | "definition" | "format"> | undefined;
}
