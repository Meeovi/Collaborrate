import { DashboardgraphqlWhereInput } from "../inputs/DashboardgraphqlWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class DashboardgraphqlWhereUniqueInput {
    id?: number | undefined;
    AND?: DashboardgraphqlWhereInput[] | undefined;
    OR?: DashboardgraphqlWhereInput[] | undefined;
    NOT?: DashboardgraphqlWhereInput[] | undefined;
    name?: StringFilter | undefined;
    url?: StringNullableFilter | undefined;
    headerValue?: StringNullableFilter | undefined;
    headerKey?: StringNullableFilter | undefined;
    urlValue?: StringNullableFilter | undefined;
    urlKey?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
}
