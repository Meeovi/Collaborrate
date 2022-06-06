import { BigIntFilter } from "../inputs/BigIntFilter";
import { CustomersRelationFilter } from "../inputs/CustomersRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Customer_groupWhereInput {
    AND?: Customer_groupWhereInput[] | undefined;
    OR?: Customer_groupWhereInput[] | undefined;
    NOT?: Customer_groupWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    tax_class?: StringNullableFilter | undefined;
    cust_id?: IntFilter | undefined;
    customers?: CustomersRelationFilter | undefined;
}
