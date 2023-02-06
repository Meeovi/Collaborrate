import { GraphQLResolveInfo } from "graphql";
import { GroupByProduct_typesArgs } from "./args/GroupByProduct_typesArgs";
import { Product_typesGroupBy } from "../../outputs/Product_typesGroupBy";
export declare class GroupByProduct_typesResolver {
    groupByProduct_types(ctx: any, info: GraphQLResolveInfo, args: GroupByProduct_typesArgs): Promise<Product_typesGroupBy[]>;
}
