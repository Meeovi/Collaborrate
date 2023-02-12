import { StatesWhereInput } from "../inputs/StatesWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class StatesWhereUniqueInput {
    id?: number | undefined;
    AND?: StatesWhereInput[] | undefined;
    OR?: StatesWhereInput[] | undefined;
    NOT?: StatesWhereInput[] | undefined;
    name?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    trainings?: StringNullableFilter | undefined;
}
