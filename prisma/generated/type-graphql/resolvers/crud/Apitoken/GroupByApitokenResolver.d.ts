import { GraphQLResolveInfo } from "graphql";
import { GroupByApitokenArgs } from "./args/GroupByApitokenArgs";
import { ApitokenGroupBy } from "../../outputs/ApitokenGroupBy";
export declare class GroupByApitokenResolver {
    groupByApitoken(ctx: any, info: GraphQLResolveInfo, args: GroupByApitokenArgs): Promise<ApitokenGroupBy[]>;
}
