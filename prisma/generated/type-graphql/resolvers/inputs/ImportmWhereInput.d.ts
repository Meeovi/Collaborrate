import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ImportmWhereInput {
    AND?: ImportmWhereInput[] | undefined;
    OR?: ImportmWhereInput[] | undefined;
    NOT?: ImportmWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    file?: StringNullableFilter | undefined;
    url?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
}
