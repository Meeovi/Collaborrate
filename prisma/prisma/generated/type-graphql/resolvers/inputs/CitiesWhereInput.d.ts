import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CitiesWhereInput {
    AND?: CitiesWhereInput[] | undefined;
    OR?: CitiesWhereInput[] | undefined;
    NOT?: CitiesWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    state?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    postalCode?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
}
