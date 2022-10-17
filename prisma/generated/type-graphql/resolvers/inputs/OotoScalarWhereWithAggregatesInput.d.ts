import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class OotoScalarWhereWithAggregatesInput {
    AND?: OotoScalarWhereWithAggregatesInput[] | undefined;
    OR?: OotoScalarWhereWithAggregatesInput[] | undefined;
    NOT?: OotoScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    login?: StringNullableWithAggregatesFilter | undefined;
    start_date?: StringNullableWithAggregatesFilter | undefined;
    end_date?: StringNullableWithAggregatesFilter | undefined;
    note?: StringNullableWithAggregatesFilter | undefined;
    using_time?: StringNullableWithAggregatesFilter | undefined;
    location?: StringNullableWithAggregatesFilter | undefined;
}
