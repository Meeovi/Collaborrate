import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class DashboardgraphqlWhereInput {
    AND?: DashboardgraphqlWhereInput[] | undefined;
    OR?: DashboardgraphqlWhereInput[] | undefined;
    NOT?: DashboardgraphqlWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    url?: StringNullableFilter | undefined;
    headerValue?: StringNullableFilter | undefined;
    headerKey?: StringNullableFilter | undefined;
    urlValue?: StringNullableFilter | undefined;
    urlKey?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
}
