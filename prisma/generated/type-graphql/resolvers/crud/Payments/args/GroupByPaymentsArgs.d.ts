import { PaymentsOrderByWithAggregationInput } from "../../../inputs/PaymentsOrderByWithAggregationInput";
import { PaymentsScalarWhereWithAggregatesInput } from "../../../inputs/PaymentsScalarWhereWithAggregatesInput";
import { PaymentsWhereInput } from "../../../inputs/PaymentsWhereInput";
export declare class GroupByPaymentsArgs {
    where?: PaymentsWhereInput | undefined;
    orderBy?: PaymentsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "client_id" | "client_secret" | "host_uri" | "redirect_url" | "redirect_url_app" | "icon" | "name" | "active" | "country">;
    having?: PaymentsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
