import { Credit_memosOrderByWithAggregationInput } from "../../../inputs/Credit_memosOrderByWithAggregationInput";
import { Credit_memosScalarWhereWithAggregatesInput } from "../../../inputs/Credit_memosScalarWhereWithAggregatesInput";
import { Credit_memosWhereInput } from "../../../inputs/Credit_memosWhereInput";
export declare class GroupByCredit_memosArgs {
    where?: Credit_memosWhereInput | undefined;
    orderBy?: Credit_memosOrderByWithAggregationInput[] | undefined;
    by: Array<"credit_memo" | "order_number" | "created" | "bill_to_name" | "status" | "refunded" | "action" | "id" | "cust_id" | "prod_id" | "customers" | "products">;
    having?: Credit_memosScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
