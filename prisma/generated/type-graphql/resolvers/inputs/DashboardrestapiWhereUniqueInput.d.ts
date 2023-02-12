import { DashboardrestapiWhereInput } from "../inputs/DashboardrestapiWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class DashboardrestapiWhereUniqueInput {
    id?: number | undefined;
    AND?: DashboardrestapiWhereInput[] | undefined;
    OR?: DashboardrestapiWhereInput[] | undefined;
    NOT?: DashboardrestapiWhereInput[] | undefined;
    name?: StringFilter | undefined;
    url?: StringNullableFilter | undefined;
    headerValue?: StringNullableFilter | undefined;
    headerKey?: StringNullableFilter | undefined;
    authenticationType?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
}
