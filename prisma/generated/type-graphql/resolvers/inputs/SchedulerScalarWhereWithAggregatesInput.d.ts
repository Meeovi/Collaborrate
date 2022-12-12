import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class SchedulerScalarWhereWithAggregatesInput {
    AND?: SchedulerScalarWhereWithAggregatesInput[] | undefined;
    OR?: SchedulerScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SchedulerScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    end_date?: StringNullableWithAggregatesFilter | undefined;
    level?: StringNullableWithAggregatesFilter | undefined;
    login?: StringNullableWithAggregatesFilter | undefined;
    notes?: StringNullableWithAggregatesFilter | undefined;
    start_date?: StringNullableWithAggregatesFilter | undefined;
    whid?: StringNullableWithAggregatesFilter | undefined;
    label?: StringNullableWithAggregatesFilter | undefined;
    public?: StringNullableWithAggregatesFilter | undefined;
    permission?: StringNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
}
