import { ChannelsAvgOrderByAggregateInput } from "../inputs/ChannelsAvgOrderByAggregateInput";
import { ChannelsCountOrderByAggregateInput } from "../inputs/ChannelsCountOrderByAggregateInput";
import { ChannelsMaxOrderByAggregateInput } from "../inputs/ChannelsMaxOrderByAggregateInput";
import { ChannelsMinOrderByAggregateInput } from "../inputs/ChannelsMinOrderByAggregateInput";
import { ChannelsSumOrderByAggregateInput } from "../inputs/ChannelsSumOrderByAggregateInput";
export declare class ChannelsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    code?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    currency?: "asc" | "desc" | undefined;
    default_lang?: "asc" | "desc" | undefined;
    include_tax?: "asc" | "desc" | undefined;
    default_zone?: "asc" | "desc" | undefined;
    default_shipping?: "asc" | "desc" | undefined;
    client_id?: "asc" | "desc" | undefined;
    client_secret?: "asc" | "desc" | undefined;
    _count?: ChannelsCountOrderByAggregateInput | undefined;
    _avg?: ChannelsAvgOrderByAggregateInput | undefined;
    _max?: ChannelsMaxOrderByAggregateInput | undefined;
    _min?: ChannelsMinOrderByAggregateInput | undefined;
    _sum?: ChannelsSumOrderByAggregateInput | undefined;
}
