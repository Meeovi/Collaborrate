import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class ReturnsScalarWhereWithAggregatesInput {
    AND?: ReturnsScalarWhereWithAggregatesInput[] | undefined;
    OR?: ReturnsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ReturnsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    validity?: StringNullableWithAggregatesFilter | undefined;
    return_prefix?: StringNullableWithAggregatesFilter | undefined;
    customers?: StringNullableWithAggregatesFilter | undefined;
    products?: StringNullableWithAggregatesFilter | undefined;
    type?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    shippingNumber?: StringNullableWithAggregatesFilter | undefined;
    shippingDescription?: StringNullableWithAggregatesFilter | undefined;
    status?: StringNullableWithAggregatesFilter | undefined;
    liquidationReason?: StringNullableWithAggregatesFilter | undefined;
    media?: StringNullableWithAggregatesFilter | undefined;
    weight?: StringNullableWithAggregatesFilter | undefined;
    height?: StringNullableWithAggregatesFilter | undefined;
    howShipped?: StringNullableWithAggregatesFilter | undefined;
    location?: StringNullableWithAggregatesFilter | undefined;
    shipTo?: StringNullableWithAggregatesFilter | undefined;
    case_id?: StringNullableWithAggregatesFilter | undefined;
}
