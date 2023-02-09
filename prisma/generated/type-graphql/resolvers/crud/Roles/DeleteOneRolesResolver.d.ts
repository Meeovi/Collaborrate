import { GraphQLResolveInfo } from "graphql";
import { DeleteOneRolesArgs } from "./args/DeleteOneRolesArgs";
import { Roles } from "../../../models/Roles";
export declare class DeleteOneRolesResolver {
    deleteOneRoles(ctx: any, info: GraphQLResolveInfo, args: DeleteOneRolesArgs): Promise<Roles | null>;
}
