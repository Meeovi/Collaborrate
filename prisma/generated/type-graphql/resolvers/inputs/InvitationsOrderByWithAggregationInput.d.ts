import { InvitationsAvgOrderByAggregateInput } from "../inputs/InvitationsAvgOrderByAggregateInput";
import { InvitationsCountOrderByAggregateInput } from "../inputs/InvitationsCountOrderByAggregateInput";
import { InvitationsMaxOrderByAggregateInput } from "../inputs/InvitationsMaxOrderByAggregateInput";
import { InvitationsMinOrderByAggregateInput } from "../inputs/InvitationsMinOrderByAggregateInput";
import { InvitationsSumOrderByAggregateInput } from "../inputs/InvitationsSumOrderByAggregateInput";
export declare class InvitationsOrderByWithAggregationInput {
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
    _count?: InvitationsCountOrderByAggregateInput | undefined;
    _avg?: InvitationsAvgOrderByAggregateInput | undefined;
    _max?: InvitationsMaxOrderByAggregateInput | undefined;
    _min?: InvitationsMinOrderByAggregateInput | undefined;
    _sum?: InvitationsSumOrderByAggregateInput | undefined;
}
