export declare class WorkspacesCreateInput {
    id?: bigint | undefined;
    created_at?: Date | undefined;
    code?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    customers?: number | undefined;
    users?: number | undefined;
    products?: bigint | undefined;
    tasks?: bigint | undefined;
    brands?: bigint | undefined;
    shops?: number | undefined;
    category?: number | undefined;
    isPublic?: boolean | undefined;
    projects?: bigint | undefined;
    author?: string | undefined;
    media?: string | undefined;
    brands_brandsToworkspaces?: string | undefined;
    categories?: string | undefined;
    customers_customersToworkspaces?: string | undefined;
    products_productsToworkspaces?: string | undefined;
    projects_projectsToworkspaces?: string | undefined;
    shops_shopsToworkspaces?: string | undefined;
    tasks_tasksToworkspaces?: string | undefined;
    users_usersToworkspaces?: string | undefined;
}
