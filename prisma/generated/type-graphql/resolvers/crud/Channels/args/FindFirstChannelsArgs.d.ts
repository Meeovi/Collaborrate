import { ChannelsOrderByWithRelationInput } from "../../../inputs/ChannelsOrderByWithRelationInput";
import { ChannelsWhereInput } from "../../../inputs/ChannelsWhereInput";
import { ChannelsWhereUniqueInput } from "../../../inputs/ChannelsWhereUniqueInput";
export declare class FindFirstChannelsArgs {
    where?: ChannelsWhereInput | undefined;
    orderBy?: ChannelsOrderByWithRelationInput[] | undefined;
    cursor?: ChannelsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "code" | "name" | "currency" | "default_lang" | "include_tax" | "default_zone" | "default_shipping" | "client_id" | "client_secret"> | undefined;
}
