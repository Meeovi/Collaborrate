import { GraphQLResolveInfo } from "graphql";
import { AggregateTagsArgs } from "./args/AggregateTagsArgs";
import { AggregateTags } from "../../outputs/AggregateTags";
export declare class AggregateTagsResolver {
    aggregateTags(ctx: any, info: GraphQLResolveInfo, args: AggregateTagsArgs): Promise<AggregateTags>;
}
