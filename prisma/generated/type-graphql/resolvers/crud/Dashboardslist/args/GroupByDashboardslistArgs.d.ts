import { DashboardslistOrderByWithAggregationInput } from "../../../inputs/DashboardslistOrderByWithAggregationInput";
import { DashboardslistScalarWhereWithAggregatesInput } from "../../../inputs/DashboardslistScalarWhereWithAggregatesInput";
import { DashboardslistWhereInput } from "../../../inputs/DashboardslistWhereInput";
export declare class GroupByDashboardslistArgs {
    where?: DashboardslistWhereInput | undefined;
    orderBy?: DashboardslistOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "client_id" | "client_secret" | "privacy" | "category" | "url" | "media" | "reports" | "tasks" | "projects" | "tickets" | "customers" | "checklists" | "visits" | "users" | "products" | "articles" | "sales" | "logo" | "content" | "published">;
    having?: DashboardslistScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
