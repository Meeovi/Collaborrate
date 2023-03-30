import { ProvidersOrderByWithAggregationInput } from "../../../inputs/ProvidersOrderByWithAggregationInput";
import { ProvidersScalarWhereWithAggregatesInput } from "../../../inputs/ProvidersScalarWhereWithAggregatesInput";
import { ProvidersWhereInput } from "../../../inputs/ProvidersWhereInput";
export declare class GroupByProvidersArgs {
    where?: ProvidersWhereInput | undefined;
    orderBy?: ProvidersOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "client_id" | "client_secret" | "host_uri" | "redirect_url" | "redirect_url_app" | "icon" | "name" | "active">;
    having?: ProvidersScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
