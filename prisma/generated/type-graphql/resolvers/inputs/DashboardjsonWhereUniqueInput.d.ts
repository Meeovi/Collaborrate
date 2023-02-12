import { DashboardjsonWhereInput } from "../inputs/DashboardjsonWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class DashboardjsonWhereUniqueInput {
    id?: number | undefined;
    AND?: DashboardjsonWhereInput[] | undefined;
    OR?: DashboardjsonWhereInput[] | undefined;
    NOT?: DashboardjsonWhereInput[] | undefined;
    name?: StringFilter | undefined;
    url?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    definition?: StringNullableFilter | undefined;
    format?: StringNullableFilter | undefined;
}
