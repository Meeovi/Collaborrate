import { WorkspacesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/WorkspacesOrderByWithRelationAndSearchRelevanceInput";
import { WorkspacesWhereInput } from "../../../inputs/WorkspacesWhereInput";
import { WorkspacesWhereUniqueInput } from "../../../inputs/WorkspacesWhereUniqueInput";
export declare class FindManyWorkspacesArgs {
    where?: WorkspacesWhereInput | undefined;
    orderBy?: WorkspacesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: WorkspacesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "code" | "name" | "description" | "customers" | "users" | "products" | "tasks" | "brands" | "shops" | "category" | "isPublic" | "projects" | "author" | "media" | "brands_brandsToworkspaces" | "categories" | "customers_customersToworkspaces" | "products_productsToworkspaces" | "projects_projectsToworkspaces" | "shops_shopsToworkspaces" | "tasks_tasksToworkspaces" | "users_usersToworkspaces"> | undefined;
}
