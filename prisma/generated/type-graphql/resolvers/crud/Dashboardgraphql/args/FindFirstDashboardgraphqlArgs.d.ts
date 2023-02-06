import { DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput";
import { DashboardgraphqlWhereInput } from "../../../inputs/DashboardgraphqlWhereInput";
import { DashboardgraphqlWhereUniqueInput } from "../../../inputs/DashboardgraphqlWhereUniqueInput";
export declare class FindFirstDashboardgraphqlArgs {
    where?: DashboardgraphqlWhereInput | undefined;
    orderBy?: DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: DashboardgraphqlWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "url" | "headerValue" | "headerKey" | "urlValue" | "urlKey" | "description"> | undefined;
}
