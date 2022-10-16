import { GraphQLResolveInfo } from "graphql";
import { GroupByArticlesArgs } from "./args/GroupByArticlesArgs";
import { ArticlesGroupBy } from "../../outputs/ArticlesGroupBy";
export declare class GroupByArticlesResolver {
    groupByArticles(ctx: any, info: GraphQLResolveInfo, args: GroupByArticlesArgs): Promise<ArticlesGroupBy[]>;
}
