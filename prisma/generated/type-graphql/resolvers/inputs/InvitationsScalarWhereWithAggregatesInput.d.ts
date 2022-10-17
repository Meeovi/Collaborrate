import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class InvitationsScalarWhereWithAggregatesInput {
    AND?: InvitationsScalarWhereWithAggregatesInput[] | undefined;
    OR?: InvitationsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: InvitationsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    invoiceDate?: DateTimeNullableWithAggregatesFilter | undefined;
    email?: StringNullableWithAggregatesFilter | undefined;
    billingAddress?: StringNullableWithAggregatesFilter | undefined;
    shippingAddress?: StringNullableWithAggregatesFilter | undefined;
    orderNumber?: StringNullableWithAggregatesFilter | undefined;
    grandTotalPurchased?: StringNullableWithAggregatesFilter | undefined;
    paymentMethod?: StringNullableWithAggregatesFilter | undefined;
    status?: StringNullableWithAggregatesFilter | undefined;
    media?: StringNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
}
