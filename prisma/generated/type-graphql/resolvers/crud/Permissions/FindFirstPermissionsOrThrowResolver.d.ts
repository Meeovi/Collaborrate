import { GraphQLResolveInfo } from "graphql";
import { FindFirstPermissionsOrThrowArgs } from "./args/FindFirstPermissionsOrThrowArgs";
import { Permissions } from "../../../models/Permissions";
export declare class FindFirstPermissionsOrThrowResolver {
    findFirstPermissionsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstPermissionsOrThrowArgs): Promise<Permissions | null>;
}
