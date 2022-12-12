export declare class InvoicesOrderByRelevanceInput {
    fields: Array<"bill_to_name" | "billing_address" | "grand_total_base" | "grand_total_purchased" | "status" | "shipping_address" | "customer_name" | "email" | "customer_group" | "payment_method" | "shipping_information" | "subtotal" | "shipping_and_handling">;
    sort: "asc" | "desc";
    search: string;
}
