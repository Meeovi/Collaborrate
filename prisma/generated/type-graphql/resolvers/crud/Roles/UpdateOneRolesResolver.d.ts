import { GraphQLResolveInfo } from "graphql";
import { UpdateOneRolesArgs } from "./args/UpdateOneRolesArgs";
import { Roles } from "../../../models/Roles";
export declare class UpdateOneRolesResolver {
    updateOneRoles(ctx: any, info: GraphQLResolveInfo, args: UpdateOneRolesArgs): Promise<Roles | null>;
}
