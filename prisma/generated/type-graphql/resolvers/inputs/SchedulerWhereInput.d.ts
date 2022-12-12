import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class SchedulerWhereInput {
    AND?: SchedulerWhereInput[] | undefined;
    OR?: SchedulerWhereInput[] | undefined;
    NOT?: SchedulerWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    end_date?: StringNullableFilter | undefined;
    level?: StringNullableFilter | undefined;
    login?: StringNullableFilter | undefined;
    notes?: StringNullableFilter | undefined;
    start_date?: StringNullableFilter | undefined;
    whid?: StringNullableFilter | undefined;
    label?: StringNullableFilter | undefined;
    public?: StringNullableFilter | undefined;
    permission?: StringNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
}
