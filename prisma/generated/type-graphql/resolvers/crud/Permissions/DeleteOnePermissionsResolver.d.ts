import { GraphQLResolveInfo } from "graphql";
import { DeleteOnePermissionsArgs } from "./args/DeleteOnePermissionsArgs";
import { Permissions } from "../../../models/Permissions";
export declare class DeleteOnePermissionsResolver {
    deleteOnePermissions(ctx: any, info: GraphQLResolveInfo, args: DeleteOnePermissionsArgs): Promise<Permissions | null>;
}
