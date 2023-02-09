import { GraphQLResolveInfo } from "graphql";
import { AggregateAttributesArgs } from "./args/AggregateAttributesArgs";
import { AggregateAttributes } from "../../outputs/AggregateAttributes";
export declare class AggregateAttributesResolver {
    aggregateAttributes(ctx: any, info: GraphQLResolveInfo, args: AggregateAttributesArgs): Promise<AggregateAttributes>;
}
