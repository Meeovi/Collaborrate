import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class DashboardslidesWhereInput {
    AND?: DashboardslidesWhereInput[] | undefined;
    OR?: DashboardslidesWhereInput[] | undefined;
    NOT?: DashboardslidesWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    categories?: StringNullableFilter | undefined;
    media?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
}
