import { NewslettersOrderByWithAggregationInput } from "../../../inputs/NewslettersOrderByWithAggregationInput";
import { NewslettersScalarWhereWithAggregatesInput } from "../../../inputs/NewslettersScalarWhereWithAggregatesInput";
import { NewslettersWhereInput } from "../../../inputs/NewslettersWhereInput";
export declare class GroupByNewslettersArgs {
    where?: NewslettersWhereInput | undefined;
    orderBy?: NewslettersOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "email" | "customer_first_name" | "customer_last_name" | "store" | "status" | "websites" | "created_at" | "cust_id" | "customers">;
    having?: NewslettersScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
