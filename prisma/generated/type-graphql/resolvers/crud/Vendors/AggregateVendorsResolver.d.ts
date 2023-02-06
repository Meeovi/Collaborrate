import { GraphQLResolveInfo } from "graphql";
import { AggregateVendorsArgs } from "./args/AggregateVendorsArgs";
import { AggregateVendors } from "../../outputs/AggregateVendors";
export declare class AggregateVendorsResolver {
    aggregateVendors(ctx: any, info: GraphQLResolveInfo, args: AggregateVendorsArgs): Promise<AggregateVendors>;
}
