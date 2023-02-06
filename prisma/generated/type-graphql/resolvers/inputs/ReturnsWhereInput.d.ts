import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ReturnsWhereInput {
    AND?: ReturnsWhereInput[] | undefined;
    OR?: ReturnsWhereInput[] | undefined;
    NOT?: ReturnsWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    validity?: StringNullableFilter | undefined;
    return_prefix?: StringNullableFilter | undefined;
    customers?: StringNullableFilter | undefined;
    products?: StringNullableFilter | undefined;
    type?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    shippingNumber?: StringNullableFilter | undefined;
    shippingDescription?: StringNullableFilter | undefined;
    status?: StringNullableFilter | undefined;
    liquidationReason?: StringNullableFilter | undefined;
    media?: StringNullableFilter | undefined;
    weight?: StringNullableFilter | undefined;
    height?: StringNullableFilter | undefined;
    howShipped?: StringNullableFilter | undefined;
    location?: StringNullableFilter | undefined;
    shipTo?: StringNullableFilter | undefined;
    case_id?: StringNullableFilter | undefined;
}
