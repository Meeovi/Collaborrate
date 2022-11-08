import { GraphQLResolveInfo } from "graphql";
import { AggregateSegmentsArgs } from "./args/AggregateSegmentsArgs";
import { AggregateSegments } from "../../outputs/AggregateSegments";
export declare class AggregateSegmentsResolver {
    aggregateSegments(ctx: any, info: GraphQLResolveInfo, args: AggregateSegmentsArgs): Promise<AggregateSegments>;
}
