import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ApitokenScalarWhereWithAggregatesInput {
    AND?: ApitokenScalarWhereWithAggregatesInput[] | undefined;
    OR?: ApitokenScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ApitokenScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    token_type?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    token?: BigIntWithAggregatesFilter | undefined;
}
