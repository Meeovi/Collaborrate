import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class SegmentsWhereInput {
    AND?: SegmentsWhereInput[] | undefined;
    OR?: SegmentsWhereInput[] | undefined;
    NOT?: SegmentsWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    website?: StringNullableFilter | undefined;
    status?: StringNullableFilter | undefined;
    apply_to?: StringNullableFilter | undefined;
    customers?: StringNullableFilter | undefined;
}
