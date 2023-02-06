import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class PartnersScalarWhereWithAggregatesInput {
    AND?: PartnersScalarWhereWithAggregatesInput[] | undefined;
    OR?: PartnersScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PartnersScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    address?: StringNullableWithAggregatesFilter | undefined;
    city?: StringNullableWithAggregatesFilter | undefined;
    state?: StringNullableWithAggregatesFilter | undefined;
    country?: StringNullableWithAggregatesFilter | undefined;
    isPublic?: StringNullableWithAggregatesFilter | undefined;
    business_type?: StringNullableWithAggregatesFilter | undefined;
}
