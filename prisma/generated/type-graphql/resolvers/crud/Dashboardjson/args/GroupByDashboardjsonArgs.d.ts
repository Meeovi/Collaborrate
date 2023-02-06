import { DashboardjsonOrderByWithAggregationInput } from "../../../inputs/DashboardjsonOrderByWithAggregationInput";
import { DashboardjsonScalarWhereWithAggregatesInput } from "../../../inputs/DashboardjsonScalarWhereWithAggregatesInput";
import { DashboardjsonWhereInput } from "../../../inputs/DashboardjsonWhereInput";
export declare class GroupByDashboardjsonArgs {
    where?: DashboardjsonWhereInput | undefined;
    orderBy?: DashboardjsonOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "url" | "description" | "definition" | "format">;
    having?: DashboardjsonScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
