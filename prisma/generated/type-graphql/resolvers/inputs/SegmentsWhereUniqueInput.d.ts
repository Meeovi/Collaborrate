import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { SegmentsWhereInput } from "../inputs/SegmentsWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class SegmentsWhereUniqueInput {
    id?: bigint | undefined;
    AND?: SegmentsWhereInput[] | undefined;
    OR?: SegmentsWhereInput[] | undefined;
    NOT?: SegmentsWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    website?: StringNullableFilter | undefined;
    status?: StringNullableFilter | undefined;
    apply_to?: StringNullableFilter | undefined;
    customers?: StringNullableFilter | undefined;
}
