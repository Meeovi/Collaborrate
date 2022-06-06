import { GraphQLResolveInfo } from "graphql";
import { CreatePermissionsArgs } from "./args/CreatePermissionsArgs";
import { Permissions } from "../../../models/Permissions";
export declare class CreatePermissionsResolver {
    createPermissions(ctx: any, info: GraphQLResolveInfo, args: CreatePermissionsArgs): Promise<Permissions>;
}
