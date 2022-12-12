import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class VisitsWhereInput {
    AND?: VisitsWhereInput[] | undefined;
    OR?: VisitsWhereInput[] | undefined;
    NOT?: VisitsWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    location?: StringNullableFilter | undefined;
    username?: StringNullableFilter | undefined;
    reason?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    emergency?: StringNullableFilter | undefined;
    start_date?: StringNullableFilter | undefined;
    end_date?: StringNullableFilter | undefined;
    task?: StringNullableFilter | undefined;
    meeting?: StringNullableFilter | undefined;
}
