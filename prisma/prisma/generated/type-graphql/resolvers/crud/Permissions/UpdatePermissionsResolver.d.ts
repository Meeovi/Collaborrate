import { GraphQLResolveInfo } from "graphql";
import { UpdatePermissionsArgs } from "./args/UpdatePermissionsArgs";
import { Permissions } from "../../../models/Permissions";
export declare class UpdatePermissionsResolver {
    updatePermissions(ctx: any, info: GraphQLResolveInfo, args: UpdatePermissionsArgs): Promise<Permissions | null>;
}
