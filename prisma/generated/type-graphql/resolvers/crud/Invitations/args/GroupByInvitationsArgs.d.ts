import { InvitationsOrderByWithAggregationInput } from "../../../inputs/InvitationsOrderByWithAggregationInput";
import { InvitationsScalarWhereWithAggregatesInput } from "../../../inputs/InvitationsScalarWhereWithAggregatesInput";
import { InvitationsWhereInput } from "../../../inputs/InvitationsWhereInput";
export declare class GroupByInvitationsArgs {
    where?: InvitationsWhereInput | undefined;
    orderBy?: InvitationsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "invoiceDate" | "email" | "billingAddress" | "shippingAddress" | "orderNumber" | "grandTotalPurchased" | "paymentMethod" | "status" | "media" | "content">;
    having?: InvitationsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
