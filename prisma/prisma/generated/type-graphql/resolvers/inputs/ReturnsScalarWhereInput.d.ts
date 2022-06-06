import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ReturnsScalarWhereInput {
    AND?: ReturnsScalarWhereInput[] | undefined;
    OR?: ReturnsScalarWhereInput[] | undefined;
    NOT?: ReturnsScalarWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    validity?: StringNullableFilter | undefined;
    return_prefix?: StringNullableFilter | undefined;
    prod_id?: BigIntFilter | undefined;
    cust_id?: IntFilter | undefined;
}
