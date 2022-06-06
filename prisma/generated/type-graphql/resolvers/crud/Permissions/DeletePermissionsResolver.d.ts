import { GraphQLResolveInfo } from "graphql";
import { DeletePermissionsArgs } from "./args/DeletePermissionsArgs";
import { Permissions } from "../../../models/Permissions";
export declare class DeletePermissionsResolver {
    deletePermissions(ctx: any, info: GraphQLResolveInfo, args: DeletePermissionsArgs): Promise<Permissions | null>;
}
