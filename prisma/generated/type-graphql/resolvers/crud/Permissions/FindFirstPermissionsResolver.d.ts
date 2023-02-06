import { GraphQLResolveInfo } from "graphql";
import { FindFirstPermissionsArgs } from "./args/FindFirstPermissionsArgs";
import { Permissions } from "../../../models/Permissions";
export declare class FindFirstPermissionsResolver {
    findFirstPermissions(ctx: any, info: GraphQLResolveInfo, args: FindFirstPermissionsArgs): Promise<Permissions | null>;
}
