import { DashboardsOrderByWithAggregationInput } from "../../../inputs/DashboardsOrderByWithAggregationInput";
import { DashboardsScalarWhereWithAggregatesInput } from "../../../inputs/DashboardsScalarWhereWithAggregatesInput";
import { DashboardsWhereInput } from "../../../inputs/DashboardsWhereInput";
export declare class GroupByDashboardsArgs {
    where?: DashboardsWhereInput | undefined;
    orderBy?: DashboardsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "client_id" | "client_secret" | "privacy" | "category" | "url" | "media" | "reports" | "tasks" | "projects" | "tickets" | "customers" | "checklists" | "visits" | "users" | "products" | "articles" | "sales" | "logo" | "content" | "published">;
    having?: DashboardsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
