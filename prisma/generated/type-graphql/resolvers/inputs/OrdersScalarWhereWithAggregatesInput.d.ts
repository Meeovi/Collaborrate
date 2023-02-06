import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class OrdersScalarWhereWithAggregatesInput {
    AND?: OrdersScalarWhereWithAggregatesInput[] | undefined;
    OR?: OrdersScalarWhereWithAggregatesInput[] | undefined;
    NOT?: OrdersScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    purchase_point?: IntNullableWithAggregatesFilter | undefined;
    purchase_date?: DateTimeNullableWithAggregatesFilter | undefined;
    bill_to_name?: StringWithAggregatesFilter | undefined;
    ship_to_name?: StringNullableWithAggregatesFilter | undefined;
    grand_total_base?: IntNullableWithAggregatesFilter | undefined;
    grand_total_purchased?: IntNullableWithAggregatesFilter | undefined;
    status?: BoolNullableWithAggregatesFilter | undefined;
    action?: BoolNullableWithAggregatesFilter | undefined;
    allocated_sources?: StringNullableWithAggregatesFilter | undefined;
    braintree_transaction_source?: StringNullableWithAggregatesFilter | undefined;
    cust_id?: IntWithAggregatesFilter | undefined;
    prod_id?: BigIntWithAggregatesFilter | undefined;
    customers?: StringNullableWithAggregatesFilter | undefined;
    products?: StringNullableWithAggregatesFilter | undefined;
    quotes?: StringNullableWithAggregatesFilter | undefined;
    transactions?: StringNullableWithAggregatesFilter | undefined;
}
