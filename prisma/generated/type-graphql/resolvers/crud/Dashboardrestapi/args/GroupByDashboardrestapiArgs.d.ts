import { DashboardrestapiOrderByWithAggregationInput } from "../../../inputs/DashboardrestapiOrderByWithAggregationInput";
import { DashboardrestapiScalarWhereWithAggregatesInput } from "../../../inputs/DashboardrestapiScalarWhereWithAggregatesInput";
import { DashboardrestapiWhereInput } from "../../../inputs/DashboardrestapiWhereInput";
export declare class GroupByDashboardrestapiArgs {
    where?: DashboardrestapiWhereInput | undefined;
    orderBy?: DashboardrestapiOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "url" | "headerValue" | "headerKey" | "authenticationType" | "description">;
    having?: DashboardrestapiScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
