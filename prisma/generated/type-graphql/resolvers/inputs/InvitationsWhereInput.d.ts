import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class InvitationsWhereInput {
    AND?: InvitationsWhereInput[] | undefined;
    OR?: InvitationsWhereInput[] | undefined;
    NOT?: InvitationsWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    invoiceDate?: DateTimeNullableFilter | undefined;
    email?: StringNullableFilter | undefined;
    billingAddress?: StringNullableFilter | undefined;
    shippingAddress?: StringNullableFilter | undefined;
    orderNumber?: StringNullableFilter | undefined;
    grandTotalPurchased?: StringNullableFilter | undefined;
    paymentMethod?: StringNullableFilter | undefined;
    status?: StringNullableFilter | undefined;
    media?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
}
