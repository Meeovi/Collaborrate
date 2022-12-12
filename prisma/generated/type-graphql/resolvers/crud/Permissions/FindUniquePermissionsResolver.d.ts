import { GraphQLResolveInfo } from "graphql";
import { FindUniquePermissionsArgs } from "./args/FindUniquePermissionsArgs";
import { Permissions } from "../../../models/Permissions";
export declare class FindUniquePermissionsResolver {
    findUniquePermissions(ctx: any, info: GraphQLResolveInfo, args: FindUniquePermissionsArgs): Promise<Permissions | null>;
}
