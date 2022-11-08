import { GraphQLResolveInfo } from "graphql";
import { FindFirstRolesArgs } from "./args/FindFirstRolesArgs";
import { Roles } from "../../../models/Roles";
export declare class FindFirstRolesResolver {
    findFirstRoles(ctx: any, info: GraphQLResolveInfo, args: FindFirstRolesArgs): Promise<Roles | null>;
}
