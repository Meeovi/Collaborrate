import { GraphQLResolveInfo } from "graphql";
import { FindUniqueRoleArgs } from "./args/FindUniqueRoleArgs";
import { Role } from "../../../models/Role";
export declare class FindUniqueRoleResolver {
    role(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRoleArgs): Promise<Role | null>;
}
