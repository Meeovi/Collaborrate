import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class DashboardrestapiWhereInput {
    AND?: DashboardrestapiWhereInput[] | undefined;
    OR?: DashboardrestapiWhereInput[] | undefined;
    NOT?: DashboardrestapiWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    url?: StringNullableFilter | undefined;
    headerValue?: StringNullableFilter | undefined;
    headerKey?: StringNullableFilter | undefined;
    authenticationType?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
}
