import { GraphQLResolveInfo } from "graphql";
import { AggregateCore_storeArgs } from "./args/AggregateCore_storeArgs";
import { AggregateCore_store } from "../../outputs/AggregateCore_store";
export declare class AggregateCore_storeResolver {
    aggregateCore_store(ctx: any, info: GraphQLResolveInfo, args: AggregateCore_storeArgs): Promise<AggregateCore_store>;
}
