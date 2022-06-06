import { Newsletter_subscribersOrderByWithAggregationInput } from "../../../inputs/Newsletter_subscribersOrderByWithAggregationInput";
import { Newsletter_subscribersScalarWhereWithAggregatesInput } from "../../../inputs/Newsletter_subscribersScalarWhereWithAggregatesInput";
import { Newsletter_subscribersWhereInput } from "../../../inputs/Newsletter_subscribersWhereInput";
export declare class GroupByNewsletter_subscribersArgs {
    where?: Newsletter_subscribersWhereInput | undefined;
    orderBy?: Newsletter_subscribersOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "email" | "customer_first_name" | "customer_last_name" | "store" | "status" | "websites" | "created_at" | "cust_id">;
    having?: Newsletter_subscribersScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
