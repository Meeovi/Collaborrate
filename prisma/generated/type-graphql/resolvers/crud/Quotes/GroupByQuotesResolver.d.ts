import { GraphQLResolveInfo } from "graphql";
import { GroupByQuotesArgs } from "./args/GroupByQuotesArgs";
import { QuotesGroupBy } from "../../outputs/QuotesGroupBy";
export declare class GroupByQuotesResolver {
    groupByQuotes(ctx: any, info: GraphQLResolveInfo, args: GroupByQuotesArgs): Promise<QuotesGroupBy[]>;
}
