import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class OotoWhereInput {
    AND?: OotoWhereInput[] | undefined;
    OR?: OotoWhereInput[] | undefined;
    NOT?: OotoWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    login?: StringNullableFilter | undefined;
    start_date?: StringNullableFilter | undefined;
    end_date?: StringNullableFilter | undefined;
    note?: StringNullableFilter | undefined;
    using_time?: StringNullableFilter | undefined;
    location?: StringNullableFilter | undefined;
}
