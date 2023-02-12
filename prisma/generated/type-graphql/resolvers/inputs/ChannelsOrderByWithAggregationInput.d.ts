import { ChannelsAvgOrderByAggregateInput } from "../inputs/ChannelsAvgOrderByAggregateInput";
import { ChannelsCountOrderByAggregateInput } from "../inputs/ChannelsCountOrderByAggregateInput";
import { ChannelsMaxOrderByAggregateInput } from "../inputs/ChannelsMaxOrderByAggregateInput";
import { ChannelsMinOrderByAggregateInput } from "../inputs/ChannelsMinOrderByAggregateInput";
import { ChannelsSumOrderByAggregateInput } from "../inputs/ChannelsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ChannelsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    code?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    currency?: SortOrderInput | undefined;
    default_lang?: SortOrderInput | undefined;
    include_tax?: SortOrderInput | undefined;
    default_zone?: SortOrderInput | undefined;
    default_shipping?: SortOrderInput | undefined;
    client_id?: SortOrderInput | undefined;
    client_secret?: SortOrderInput | undefined;
    _count?: ChannelsCountOrderByAggregateInput | undefined;
    _avg?: ChannelsAvgOrderByAggregateInput | undefined;
    _max?: ChannelsMaxOrderByAggregateInput | undefined;
    _min?: ChannelsMinOrderByAggregateInput | undefined;
    _sum?: ChannelsSumOrderByAggregateInput | undefined;
}
