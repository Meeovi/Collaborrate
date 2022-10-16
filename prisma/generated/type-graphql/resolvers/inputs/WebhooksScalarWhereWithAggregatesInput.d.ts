import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class WebhooksScalarWhereWithAggregatesInput {
    AND?: WebhooksScalarWhereWithAggregatesInput[] | undefined;
    OR?: WebhooksScalarWhereWithAggregatesInput[] | undefined;
    NOT?: WebhooksScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    url?: StringWithAggregatesFilter | undefined;
    headers?: StringNullableWithAggregatesFilter | undefined;
    create?: StringNullableWithAggregatesFilter | undefined;
    retrieve?: StringNullableWithAggregatesFilter | undefined;
    update?: StringNullableWithAggregatesFilter | undefined;
    delete?: StringNullableWithAggregatesFilter | undefined;
    publish?: StringNullableWithAggregatesFilter | undefined;
    unpublish?: StringNullableWithAggregatesFilter | undefined;
}
