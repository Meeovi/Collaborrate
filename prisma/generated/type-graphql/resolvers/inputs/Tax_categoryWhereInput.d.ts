import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Tax_categoryWhereInput {
    AND?: Tax_categoryWhereInput[] | undefined;
    OR?: Tax_categoryWhereInput[] | undefined;
    NOT?: Tax_categoryWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    default?: StringNullableFilter | undefined;
}
