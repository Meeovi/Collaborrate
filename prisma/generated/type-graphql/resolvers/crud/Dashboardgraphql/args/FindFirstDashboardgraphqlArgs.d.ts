import { DashboardgraphqlOrderByWithRelationInput } from "../../../inputs/DashboardgraphqlOrderByWithRelationInput";
import { DashboardgraphqlWhereInput } from "../../../inputs/DashboardgraphqlWhereInput";
import { DashboardgraphqlWhereUniqueInput } from "../../../inputs/DashboardgraphqlWhereUniqueInput";
export declare class FindFirstDashboardgraphqlArgs {
    where?: DashboardgraphqlWhereInput | undefined;
    orderBy?: DashboardgraphqlOrderByWithRelationInput[] | undefined;
    cursor?: DashboardgraphqlWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "url" | "headerValue" | "headerKey" | "urlValue" | "urlKey" | "description"> | undefined;
}
