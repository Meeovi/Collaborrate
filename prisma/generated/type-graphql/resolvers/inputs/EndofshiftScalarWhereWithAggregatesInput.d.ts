import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class EndofshiftScalarWhereWithAggregatesInput {
    AND?: EndofshiftScalarWhereWithAggregatesInput[] | undefined;
    OR?: EndofshiftScalarWhereWithAggregatesInput[] | undefined;
    NOT?: EndofshiftScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    login?: StringNullableWithAggregatesFilter | undefined;
    mcms?: StringNullableWithAggregatesFilter | undefined;
    next_shift?: StringNullableWithAggregatesFilter | undefined;
    projects?: StringNullableWithAggregatesFilter | undefined;
    tickets?: StringNullableWithAggregatesFilter | undefined;
    whid?: StringNullableWithAggregatesFilter | undefined;
}
