import { GraphQLResolveInfo } from "graphql";
import { CreateRoleArgs } from "./args/CreateRoleArgs";
import { Role } from "../../../models/Role";
export declare class CreateRoleResolver {
    createRole(ctx: any, info: GraphQLResolveInfo, args: CreateRoleArgs): Promise<Role>;
}
