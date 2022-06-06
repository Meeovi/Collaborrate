import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProvidersScalarWhereWithAggregatesInput {
    AND?: ProvidersScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProvidersScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProvidersScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    client_id?: StringNullableWithAggregatesFilter | undefined;
    client_secret?: StringNullableWithAggregatesFilter | undefined;
    host_uri?: StringNullableWithAggregatesFilter | undefined;
    redirect_url?: StringNullableWithAggregatesFilter | undefined;
    redirect_url_app?: StringNullableWithAggregatesFilter | undefined;
    icon?: StringNullableWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    active?: StringNullableWithAggregatesFilter | undefined;
}
