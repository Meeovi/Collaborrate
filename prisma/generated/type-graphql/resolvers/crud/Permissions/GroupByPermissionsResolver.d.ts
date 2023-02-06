import { GraphQLResolveInfo } from "graphql";
import { GroupByPermissionsArgs } from "./args/GroupByPermissionsArgs";
import { PermissionsGroupBy } from "../../outputs/PermissionsGroupBy";
export declare class GroupByPermissionsResolver {
    groupByPermissions(ctx: any, info: GraphQLResolveInfo, args: GroupByPermissionsArgs): Promise<PermissionsGroupBy[]>;
}
