import { GraphQLResolveInfo } from "graphql";
import { UpsertOnePermissionsArgs } from "./args/UpsertOnePermissionsArgs";
import { Permissions } from "../../../models/Permissions";
export declare class UpsertOnePermissionsResolver {
    upsertOnePermissions(ctx: any, info: GraphQLResolveInfo, args: UpsertOnePermissionsArgs): Promise<Permissions>;
}
