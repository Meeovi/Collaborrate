import { GraphQLResolveInfo } from "graphql";
import { AggregateDiscountsArgs } from "./args/AggregateDiscountsArgs";
import { AggregateDiscounts } from "../../outputs/AggregateDiscounts";
export declare class AggregateDiscountsResolver {
    aggregateDiscounts(ctx: any, info: GraphQLResolveInfo, args: AggregateDiscountsArgs): Promise<AggregateDiscounts>;
}
