import { InvitationsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/InvitationsOrderByWithRelationAndSearchRelevanceInput";
import { InvitationsWhereInput } from "../../../inputs/InvitationsWhereInput";
import { InvitationsWhereUniqueInput } from "../../../inputs/InvitationsWhereUniqueInput";
export declare class FindFirstInvitationsArgs {
    where?: InvitationsWhereInput | undefined;
    orderBy?: InvitationsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: InvitationsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "invoiceDate" | "email" | "billingAddress" | "shippingAddress" | "orderNumber" | "grandTotalPurchased" | "paymentMethod" | "status" | "media" | "content"> | undefined;
}
