import { GraphQLResolveInfo } from "graphql";
import { GroupByLogInArgs } from "./args/GroupByLogInArgs";
import { LogInGroupBy } from "../../outputs/LogInGroupBy";
export declare class GroupByLogInResolver {
    groupByLogIn(ctx: any, info: GraphQLResolveInfo, args: GroupByLogInArgs): Promise<LogInGroupBy[]>;
}
