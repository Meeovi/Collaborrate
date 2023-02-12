import { CountriesWhereInput } from "../inputs/CountriesWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CountriesWhereUniqueInput {
    id?: number | undefined;
    AND?: CountriesWhereInput[] | undefined;
    OR?: CountriesWhereInput[] | undefined;
    NOT?: CountriesWhereInput[] | undefined;
    name?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    region?: StringNullableFilter | undefined;
    trainings?: StringNullableFilter | undefined;
}
