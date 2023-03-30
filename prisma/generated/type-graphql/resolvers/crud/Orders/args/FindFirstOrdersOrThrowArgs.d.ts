import { OrdersOrderByWithRelationInput } from "../../../inputs/OrdersOrderByWithRelationInput";
import { OrdersWhereInput } from "../../../inputs/OrdersWhereInput";
import { OrdersWhereUniqueInput } from "../../../inputs/OrdersWhereUniqueInput";
export declare class FindFirstOrdersOrThrowArgs {
    where?: OrdersWhereInput | undefined;
    orderBy?: OrdersOrderByWithRelationInput[] | undefined;
    cursor?: OrdersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "purchase_point" | "purchase_date" | "bill_to_name" | "ship_to_name" | "grand_total_base" | "grand_total_purchased" | "status" | "action" | "allocated_sources" | "braintree_transaction_source" | "cust_id" | "prod_id" | "customers" | "products" | "quotes" | "transactions"> | undefined;
}
