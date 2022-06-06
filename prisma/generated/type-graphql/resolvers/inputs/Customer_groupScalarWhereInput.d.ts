import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Customer_groupScalarWhereInput {
    AND?: Customer_groupScalarWhereInput[] | undefined;
    OR?: Customer_groupScalarWhereInput[] | undefined;
    NOT?: Customer_groupScalarWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    tax_class?: StringNullableFilter | undefined;
    cust_id?: IntFilter | undefined;
}
