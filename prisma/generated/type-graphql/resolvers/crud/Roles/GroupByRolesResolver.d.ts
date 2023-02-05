import { GraphQLResolveInfo } from "graphql";
import { GroupByRolesArgs } from "./args/GroupByRolesArgs";
import { RolesGroupBy } from "../../outputs/RolesGroupBy";
export declare class GroupByRolesResolver {
    groupByRoles(ctx: any, info: GraphQLResolveInfo, args: GroupByRolesArgs): Promise<RolesGroupBy[]>;
}
