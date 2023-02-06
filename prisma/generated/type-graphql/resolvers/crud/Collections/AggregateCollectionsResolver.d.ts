import { GraphQLResolveInfo } from "graphql";
import { AggregateCollectionsArgs } from "./args/AggregateCollectionsArgs";
import { AggregateCollections } from "../../outputs/AggregateCollections";
export declare class AggregateCollectionsResolver {
    aggregateCollections(ctx: any, info: GraphQLResolveInfo, args: AggregateCollectionsArgs): Promise<AggregateCollections>;
}
