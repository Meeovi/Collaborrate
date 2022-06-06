import { GraphQLResolveInfo } from "graphql";
import { AggregateShopsArgs } from "./args/AggregateShopsArgs";
import { AggregateShops } from "../../outputs/AggregateShops";
export declare class AggregateShopsResolver {
    aggregateShops(ctx: any, info: GraphQLResolveInfo, args: AggregateShopsArgs): Promise<AggregateShops>;
}
