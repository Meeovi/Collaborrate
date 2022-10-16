import { InvitationsOrderByRelevanceInput } from "../inputs/InvitationsOrderByRelevanceInput";
export declare class InvitationsOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    invoiceDate?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    billingAddress?: "asc" | "desc" | undefined;
    shippingAddress?: "asc" | "desc" | undefined;
    orderNumber?: "asc" | "desc" | undefined;
    grandTotalPurchased?: "asc" | "desc" | undefined;
    paymentMethod?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    media?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    _relevance?: InvitationsOrderByRelevanceInput | undefined;
}
