export declare class OrdersOrderByRelevanceInput {
    fields: Array<"bill_to_name" | "ship_to_name" | "allocated_sources" | "braintree_transaction_source" | "customers" | "products" | "quotes" | "transactions">;
    sort: "asc" | "desc";
    search: string;
}
