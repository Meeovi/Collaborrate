import { GraphQLResolveInfo } from "graphql";
import { DeleteRoleArgs } from "./args/DeleteRoleArgs";
import { Role } from "../../../models/Role";
export declare class DeleteRoleResolver {
    deleteRole(ctx: any, info: GraphQLResolveInfo, args: DeleteRoleArgs): Promise<Role | null>;
}
