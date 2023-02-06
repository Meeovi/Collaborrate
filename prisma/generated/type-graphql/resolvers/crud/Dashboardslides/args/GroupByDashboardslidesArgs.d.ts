import { DashboardslidesOrderByWithAggregationInput } from "../../../inputs/DashboardslidesOrderByWithAggregationInput";
import { DashboardslidesScalarWhereWithAggregatesInput } from "../../../inputs/DashboardslidesScalarWhereWithAggregatesInput";
import { DashboardslidesWhereInput } from "../../../inputs/DashboardslidesWhereInput";
export declare class GroupByDashboardslidesArgs {
    where?: DashboardslidesWhereInput | undefined;
    orderBy?: DashboardslidesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "categories" | "media" | "description">;
    having?: DashboardslidesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
