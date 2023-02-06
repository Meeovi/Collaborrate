import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class DashboardjsonWhereInput {
    AND?: DashboardjsonWhereInput[] | undefined;
    OR?: DashboardjsonWhereInput[] | undefined;
    NOT?: DashboardjsonWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    url?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    definition?: StringNullableFilter | undefined;
    format?: StringNullableFilter | undefined;
}
