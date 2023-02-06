import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class ChannelsScalarWhereWithAggregatesInput {
    AND?: ChannelsScalarWhereWithAggregatesInput[] | undefined;
    OR?: ChannelsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ChannelsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    code?: StringNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    currency?: StringNullableWithAggregatesFilter | undefined;
    default_lang?: StringNullableWithAggregatesFilter | undefined;
    include_tax?: StringNullableWithAggregatesFilter | undefined;
    default_zone?: StringNullableWithAggregatesFilter | undefined;
    default_shipping?: StringNullableWithAggregatesFilter | undefined;
    client_id?: StringNullableWithAggregatesFilter | undefined;
    client_secret?: StringNullableWithAggregatesFilter | undefined;
}
