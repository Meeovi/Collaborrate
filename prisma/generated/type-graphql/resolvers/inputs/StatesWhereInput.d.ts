import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class StatesWhereInput {
    AND?: StatesWhereInput[] | undefined;
    OR?: StatesWhereInput[] | undefined;
    NOT?: StatesWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    trainings?: StringNullableFilter | undefined;
}
