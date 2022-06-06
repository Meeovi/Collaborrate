import { GraphQLResolveInfo } from "graphql";
import { AggregateProduct_attributeArgs } from "./args/AggregateProduct_attributeArgs";
import { AggregateProduct_attribute } from "../../outputs/AggregateProduct_attribute";
export declare class AggregateProduct_attributeResolver {
    aggregateProduct_attribute(ctx: any, info: GraphQLResolveInfo, args: AggregateProduct_attributeArgs): Promise<AggregateProduct_attribute>;
}
