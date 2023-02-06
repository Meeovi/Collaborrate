import { GraphQLResolveInfo } from "graphql";
import { FindManyPermissionsArgs } from "./args/FindManyPermissionsArgs";
import { Permissions } from "../../../models/Permissions";
export declare class FindManyPermissionsResolver {
    findManyPermissions(ctx: any, info: GraphQLResolveInfo, args: FindManyPermissionsArgs): Promise<Permissions[]>;
}
