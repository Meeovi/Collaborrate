import { GraphQLResolveInfo } from "graphql";
import { UpsertOneRolesArgs } from "./args/UpsertOneRolesArgs";
import { Roles } from "../../../models/Roles";
export declare class UpsertOneRolesResolver {
    upsertOneRoles(ctx: any, info: GraphQLResolveInfo, args: UpsertOneRolesArgs): Promise<Roles>;
}
