import { GraphQLResolveInfo } from "graphql";
import { FindUniquePermissionsOrThrowArgs } from "./args/FindUniquePermissionsOrThrowArgs";
import { Permissions } from "../../../models/Permissions";
export declare class FindUniquePermissionsOrThrowResolver {
    findUniquePermissionsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniquePermissionsOrThrowArgs): Promise<Permissions | null>;
}
