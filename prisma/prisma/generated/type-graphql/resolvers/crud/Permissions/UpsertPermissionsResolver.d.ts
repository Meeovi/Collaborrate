import { GraphQLResolveInfo } from "graphql";
import { UpsertPermissionsArgs } from "./args/UpsertPermissionsArgs";
import { Permissions } from "../../../models/Permissions";
export declare class UpsertPermissionsResolver {
    upsertPermissions(ctx: any, info: GraphQLResolveInfo, args: UpsertPermissionsArgs): Promise<Permissions>;
}
