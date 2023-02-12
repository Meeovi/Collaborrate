import { DashboardslidesWhereInput } from "../inputs/DashboardslidesWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class DashboardslidesWhereUniqueInput {
    id?: number | undefined;
    AND?: DashboardslidesWhereInput[] | undefined;
    OR?: DashboardslidesWhereInput[] | undefined;
    NOT?: DashboardslidesWhereInput[] | undefined;
    name?: StringFilter | undefined;
    categories?: StringNullableFilter | undefined;
    media?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
}
