import { GraphQLResolveInfo } from "graphql";
import { UpdateRoleArgs } from "./args/UpdateRoleArgs";
import { Role } from "../../../models/Role";
export declare class UpdateRoleResolver {
    updateRole(ctx: any, info: GraphQLResolveInfo, args: UpdateRoleArgs): Promise<Role | null>;
}
