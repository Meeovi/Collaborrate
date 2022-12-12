import { WorkspacesOrderByWithAggregationInput } from "../../../inputs/WorkspacesOrderByWithAggregationInput";
import { WorkspacesScalarWhereWithAggregatesInput } from "../../../inputs/WorkspacesScalarWhereWithAggregatesInput";
import { WorkspacesWhereInput } from "../../../inputs/WorkspacesWhereInput";
export declare class GroupByWorkspacesArgs {
    where?: WorkspacesWhereInput | undefined;
    orderBy?: WorkspacesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "code" | "name" | "description" | "customers" | "users" | "products" | "tasks" | "brands" | "shops" | "category" | "isPublic" | "projects" | "author" | "media" | "brands_brandsToworkspaces" | "categories" | "customers_customersToworkspaces" | "products_productsToworkspaces" | "projects_projectsToworkspaces" | "shops_shopsToworkspaces" | "tasks_tasksToworkspaces" | "users_usersToworkspaces">;
    having?: WorkspacesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
