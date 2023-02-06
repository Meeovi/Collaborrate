import { DashboardgraphqlOrderByWithAggregationInput } from "../../../inputs/DashboardgraphqlOrderByWithAggregationInput";
import { DashboardgraphqlScalarWhereWithAggregatesInput } from "../../../inputs/DashboardgraphqlScalarWhereWithAggregatesInput";
import { DashboardgraphqlWhereInput } from "../../../inputs/DashboardgraphqlWhereInput";
export declare class GroupByDashboardgraphqlArgs {
    where?: DashboardgraphqlWhereInput | undefined;
    orderBy?: DashboardgraphqlOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "url" | "headerValue" | "headerKey" | "urlValue" | "urlKey" | "description">;
    having?: DashboardgraphqlScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
