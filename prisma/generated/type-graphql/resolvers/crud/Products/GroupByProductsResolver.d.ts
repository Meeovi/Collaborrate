import { GraphQLResolveInfo } from "graphql";
import { GroupByProductsArgs } from "./args/GroupByProductsArgs";
import { ProductsGroupBy } from "../../outputs/ProductsGroupBy";
export declare class GroupByProductsResolver {
    groupByProducts(ctx: any, info: GraphQLResolveInfo, args: GroupByProductsArgs): Promise<ProductsGroupBy[]>;
}
