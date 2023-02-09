import { BigIntFilter } from "../inputs/BigIntFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class OrdersWhereInput {
    AND?: OrdersWhereInput[] | undefined;
    OR?: OrdersWhereInput[] | undefined;
    NOT?: OrdersWhereInput[] | undefined;
    id?: IntFilter | undefined;
    purchase_point?: IntNullableFilter | undefined;
    purchase_date?: DateTimeNullableFilter | undefined;
    bill_to_name?: StringFilter | undefined;
    ship_to_name?: StringNullableFilter | undefined;
    grand_total_base?: IntNullableFilter | undefined;
    grand_total_purchased?: IntNullableFilter | undefined;
    status?: BoolNullableFilter | undefined;
    action?: BoolNullableFilter | undefined;
    allocated_sources?: StringNullableFilter | undefined;
    braintree_transaction_source?: StringNullableFilter | undefined;
    cust_id?: IntFilter | undefined;
    prod_id?: BigIntFilter | undefined;
    customers?: StringNullableFilter | undefined;
    products?: StringNullableFilter | undefined;
    quotes?: StringNullableFilter | undefined;
    transactions?: StringNullableFilter | undefined;
}
