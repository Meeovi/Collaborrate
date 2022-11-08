import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CountriesWhereInput {
    AND?: CountriesWhereInput[] | undefined;
    OR?: CountriesWhereInput[] | undefined;
    NOT?: CountriesWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    region?: StringNullableFilter | undefined;
    trainings?: StringNullableFilter | undefined;
}
