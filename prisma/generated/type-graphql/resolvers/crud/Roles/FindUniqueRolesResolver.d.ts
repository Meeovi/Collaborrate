import { GraphQLResolveInfo } from "graphql";
import { FindUniqueRolesArgs } from "./args/FindUniqueRolesArgs";
import { Roles } from "../../../models/Roles";
export declare class FindUniqueRolesResolver {
    findUniqueRoles(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRolesArgs): Promise<Roles | null>;
}
