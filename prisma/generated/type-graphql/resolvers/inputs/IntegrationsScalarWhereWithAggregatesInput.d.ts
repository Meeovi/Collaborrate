import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class IntegrationsScalarWhereWithAggregatesInput {
    AND?: IntegrationsScalarWhereWithAggregatesInput[] | undefined;
    OR?: IntegrationsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: IntegrationsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    media?: StringNullableWithAggregatesFilter | undefined;
    location?: StringNullableWithAggregatesFilter | undefined;
    category?: StringNullableWithAggregatesFilter | undefined;
}
