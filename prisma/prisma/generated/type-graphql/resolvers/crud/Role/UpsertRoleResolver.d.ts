import { GraphQLResolveInfo } from "graphql";
import { UpsertRoleArgs } from "./args/UpsertRoleArgs";
import { Role } from "../../../models/Role";
export declare class UpsertRoleResolver {
    upsertRole(ctx: any, info: GraphQLResolveInfo, args: UpsertRoleArgs): Promise<Role>;
}
