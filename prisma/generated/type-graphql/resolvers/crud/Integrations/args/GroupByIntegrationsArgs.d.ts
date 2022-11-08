import { IntegrationsOrderByWithAggregationInput } from "../../../inputs/IntegrationsOrderByWithAggregationInput";
import { IntegrationsScalarWhereWithAggregatesInput } from "../../../inputs/IntegrationsScalarWhereWithAggregatesInput";
import { IntegrationsWhereInput } from "../../../inputs/IntegrationsWhereInput";
export declare class GroupByIntegrationsArgs {
    where?: IntegrationsWhereInput | undefined;
    orderBy?: IntegrationsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "content" | "media" | "location" | "category">;
    having?: IntegrationsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
