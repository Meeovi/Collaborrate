export declare class WorkspacesOrderByRelevanceInput {
    fields: Array<"code" | "name" | "description" | "author" | "media" | "brands_brandsToworkspaces" | "categories" | "customers_customersToworkspaces" | "products_productsToworkspaces" | "projects_projectsToworkspaces" | "shops_shopsToworkspaces" | "tasks_tasksToworkspaces" | "users_usersToworkspaces">;
    sort: "asc" | "desc";
    search: string;
}
