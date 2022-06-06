import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class RoleWhereInput {
    AND?: RoleWhereInput[] | undefined;
    OR?: RoleWhereInput[] | undefined;
    NOT?: RoleWhereInput[] | undefined;
    id?: IntFilter | undefined;
    role_name?: StringFilter | undefined;
}
