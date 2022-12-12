import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class EndofshiftWhereInput {
    AND?: EndofshiftWhereInput[] | undefined;
    OR?: EndofshiftWhereInput[] | undefined;
    NOT?: EndofshiftWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    login?: StringNullableFilter | undefined;
    mcms?: StringNullableFilter | undefined;
    next_shift?: StringNullableFilter | undefined;
    projects?: StringNullableFilter | undefined;
    tickets?: StringNullableFilter | undefined;
    whid?: StringNullableFilter | undefined;
}
