import { ChannelsOrderByWithAggregationInput } from "../../../inputs/ChannelsOrderByWithAggregationInput";
import { ChannelsScalarWhereWithAggregatesInput } from "../../../inputs/ChannelsScalarWhereWithAggregatesInput";
import { ChannelsWhereInput } from "../../../inputs/ChannelsWhereInput";
export declare class GroupByChannelsArgs {
    where?: ChannelsWhereInput | undefined;
    orderBy?: ChannelsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "code" | "name" | "currency" | "default_lang" | "include_tax" | "default_zone" | "default_shipping" | "client_id" | "client_secret">;
    having?: ChannelsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
