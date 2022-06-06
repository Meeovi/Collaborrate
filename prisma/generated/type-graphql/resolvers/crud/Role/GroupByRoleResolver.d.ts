import { GraphQLResolveInfo } from "graphql";
import { GroupByRoleArgs } from "./args/GroupByRoleArgs";
import { RoleGroupBy } from "../../outputs/RoleGroupBy";
export declare class GroupByRoleResolver {
    groupByRole(ctx: any, info: GraphQLResolveInfo, args: GroupByRoleArgs): Promise<RoleGroupBy[]>;
}
