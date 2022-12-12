import { GraphQLResolveInfo } from "graphql";
import { AggregateFullfillmentsArgs } from "./args/AggregateFullfillmentsArgs";
import { AggregateFullfillments } from "../../outputs/AggregateFullfillments";
export declare class AggregateFullfillmentsResolver {
    aggregateFullfillments(ctx: any, info: GraphQLResolveInfo, args: AggregateFullfillmentsArgs): Promise<AggregateFullfillments>;
}
