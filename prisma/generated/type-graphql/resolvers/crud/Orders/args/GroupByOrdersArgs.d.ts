import { OrdersOrderByWithAggregationInput } from "../../../inputs/OrdersOrderByWithAggregationInput";
import { OrdersScalarWhereWithAggregatesInput } from "../../../inputs/OrdersScalarWhereWithAggregatesInput";
import { OrdersWhereInput } from "../../../inputs/OrdersWhereInput";
export declare class GroupByOrdersArgs {
    where?: OrdersWhereInput | undefined;
    orderBy?: OrdersOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "purchase_point" | "purchase_date" | "bill_to_name" | "ship_to_name" | "grand_total_base" | "grand_total_purchased" | "status" | "action" | "allocated_sources" | "braintree_transaction_source" | "cust_id" | "prod_id" | "customers" | "products" | "quotes" | "transactions">;
    having?: OrdersScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
