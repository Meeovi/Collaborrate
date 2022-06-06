import { BigIntFilter } from "../inputs/BigIntFilter";
import { CustomersRelationFilter } from "../inputs/CustomersRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductsRelationFilter } from "../inputs/ProductsRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Credit_memosWhereInput {
    AND?: Credit_memosWhereInput[] | undefined;
    OR?: Credit_memosWhereInput[] | undefined;
    NOT?: Credit_memosWhereInput[] | undefined;
    credit_memo?: StringFilter | undefined;
    order_number?: IntFilter | undefined;
    created?: DateTimeNullableFilter | undefined;
    bill_to_name?: StringFilter | undefined;
    status?: StringNullableFilter | undefined;
    refunded?: StringNullableFilter | undefined;
    action?: StringNullableFilter | undefined;
    id?: BigIntFilter | undefined;
    cust_id?: IntFilter | undefined;
    prod_id?: BigIntFilter | undefined;
    customers?: CustomersRelationFilter | undefined;
    products?: ProductsRelationFilter | undefined;
}
