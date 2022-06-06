import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class CustomerScalarWhereWithAggregatesInput {
    AND?: CustomerScalarWhereWithAggregatesInput[] | undefined;
    OR?: CustomerScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CustomerScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    firstname?: StringNullableWithAggregatesFilter | undefined;
    lastname?: StringNullableWithAggregatesFilter | undefined;
    username?: StringNullableWithAggregatesFilter | undefined;
    email?: StringNullableWithAggregatesFilter | undefined;
    city?: StringNullableWithAggregatesFilter | undefined;
    state?: StringNullableWithAggregatesFilter | undefined;
    country?: StringNullableWithAggregatesFilter | undefined;
    postal?: StringNullableWithAggregatesFilter | undefined;
    active?: StringNullableWithAggregatesFilter | undefined;
}
