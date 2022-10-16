import { ChannelsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ChannelsOrderByWithRelationAndSearchRelevanceInput";
import { ChannelsWhereInput } from "../../../inputs/ChannelsWhereInput";
import { ChannelsWhereUniqueInput } from "../../../inputs/ChannelsWhereUniqueInput";
export declare class FindManyChannelsArgs {
    where?: ChannelsWhereInput | undefined;
    orderBy?: ChannelsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ChannelsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "code" | "name" | "currency" | "default_lang" | "include_tax" | "default_zone" | "default_shipping" | "client_id" | "client_secret"> | undefined;
}
