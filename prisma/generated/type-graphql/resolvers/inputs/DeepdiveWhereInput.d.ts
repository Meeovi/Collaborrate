import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class DeepdiveWhereInput {
    AND?: DeepdiveWhereInput[] | undefined;
    OR?: DeepdiveWhereInput[] | undefined;
    NOT?: DeepdiveWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    end_date?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    attendees?: StringNullableFilter | undefined;
    login?: StringNullableFilter | undefined;
    start_date?: StringNullableFilter | undefined;
    whid?: StringNullableFilter | undefined;
}
