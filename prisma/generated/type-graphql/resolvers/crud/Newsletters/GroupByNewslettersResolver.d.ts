import { GraphQLResolveInfo } from "graphql";
import { GroupByNewslettersArgs } from "./args/GroupByNewslettersArgs";
import { NewslettersGroupBy } from "../../outputs/NewslettersGroupBy";
export declare class GroupByNewslettersResolver {
    groupByNewsletters(ctx: any, info: GraphQLResolveInfo, args: GroupByNewslettersArgs): Promise<NewslettersGroupBy[]>;
}
