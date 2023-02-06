import { GraphQLResolveInfo } from "graphql";
import { AggregateProductsArgs } from "./args/AggregateProductsArgs";
import { AggregateProducts } from "../../outputs/AggregateProducts";
export declare class AggregateProductsResolver {
    aggregateProducts(ctx: any, info: GraphQLResolveInfo, args: AggregateProductsArgs): Promise<AggregateProducts>;
}
