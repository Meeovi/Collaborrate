import { DashboardslistOrderByWithRelationInput } from "../../../inputs/DashboardslistOrderByWithRelationInput";
import { DashboardslistWhereInput } from "../../../inputs/DashboardslistWhereInput";
import { DashboardslistWhereUniqueInput } from "../../../inputs/DashboardslistWhereUniqueInput";
export declare class FindFirstDashboardslistArgs {
    where?: DashboardslistWhereInput | undefined;
    orderBy?: DashboardslistOrderByWithRelationInput[] | undefined;
    cursor?: DashboardslistWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "client_id" | "client_secret" | "privacy" | "category" | "url" | "media" | "reports" | "tasks" | "projects" | "tickets" | "customers" | "checklists" | "visits" | "users" | "products" | "articles" | "sales" | "logo" | "content" | "published"> | undefined;
}
