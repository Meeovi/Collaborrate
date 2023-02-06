import { GraphQLResolveInfo } from "graphql";
import { UpdateOnePermissionsArgs } from "./args/UpdateOnePermissionsArgs";
import { Permissions } from "../../../models/Permissions";
export declare class UpdateOnePermissionsResolver {
    updateOnePermissions(ctx: any, info: GraphQLResolveInfo, args: UpdateOnePermissionsArgs): Promise<Permissions | null>;
}
