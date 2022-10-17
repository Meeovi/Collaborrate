export declare class InvitationsOrderByRelevanceInput {
    fields: Array<"email" | "billingAddress" | "shippingAddress" | "orderNumber" | "grandTotalPurchased" | "paymentMethod" | "status" | "media" | "content">;
    sort: "asc" | "desc";
    search: string;
}
