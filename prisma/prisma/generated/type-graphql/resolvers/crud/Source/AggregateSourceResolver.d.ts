import { GraphQLResolveInfo } from "graphql";
import { AggregateSourceArgs } from "./args/AggregateSourceArgs";
import { AggregateSource } from "../../outputs/AggregateSource";
export declare class AggregateSourceResolver {
    aggregateSource(ctx: any, info: GraphQLResolveInfo, args: AggregateSourceArgs): Promise<AggregateSource>;
}
