import { CitiesWhereInput } from "../inputs/CitiesWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CitiesWhereUniqueInput {
    id?: number | undefined;
    AND?: CitiesWhereInput[] | undefined;
    OR?: CitiesWhereInput[] | undefined;
    NOT?: CitiesWhereInput[] | undefined;
    name?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    state?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    postalCode?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
}
