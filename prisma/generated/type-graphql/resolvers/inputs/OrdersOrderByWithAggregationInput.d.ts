import { OrdersAvgOrderByAggregateInput } from "../inputs/OrdersAvgOrderByAggregateInput";
import { OrdersCountOrderByAggregateInput } from "../inputs/OrdersCountOrderByAggregateInput";
import { OrdersMaxOrderByAggregateInput } from "../inputs/OrdersMaxOrderByAggregateInput";
import { OrdersMinOrderByAggregateInput } from "../inputs/OrdersMinOrderByAggregateInput";
import { OrdersSumOrderByAggregateInput } from "../inputs/OrdersSumOrderByAggregateInput";
export declare class OrdersOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    purchase_point?: "asc" | "desc" | undefined;
    purchase_date?: "asc" | "desc" | undefined;
    bill_to_name?: "asc" | "desc" | undefined;
    ship_to_name?: "asc" | "desc" | undefined;
    grand_total_base?: "asc" | "desc" | undefined;
    grand_total_purchased?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    action?: "asc" | "desc" | undefined;
    allocated_sources?: "asc" | "desc" | undefined;
    braintree_transaction_source?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    quotes?: "asc" | "desc" | undefined;
    transactions?: "asc" | "desc" | undefined;
    _count?: OrdersCountOrderByAggregateInput | undefined;
    _avg?: OrdersAvgOrderByAggregateInput | undefined;
    _max?: OrdersMaxOrderByAggregateInput | undefined;
    _min?: OrdersMinOrderByAggregateInput | undefined;
    _sum?: OrdersSumOrderByAggregateInput | undefined;
}
