import { GraphQLResolveInfo } from "graphql";
import { GroupByUsersArgs } from "./args/GroupByUsersArgs";
import { UsersGroupBy } from "../../outputs/UsersGroupBy";
export declare class GroupByUsersResolver {
    groupByUsers(ctx: any, info: GraphQLResolveInfo, args: GroupByUsersArgs): Promise<UsersGroupBy[]>;
}
