import { GraphQLResolveInfo } from "graphql";
import { AggregateCategoriesArgs } from "./args/AggregateCategoriesArgs";
import { AggregateCategories } from "../../outputs/AggregateCategories";
export declare class AggregateCategoriesResolver {
    aggregateCategories(ctx: any, info: GraphQLResolveInfo, args: AggregateCategoriesArgs): Promise<AggregateCategories>;
}
