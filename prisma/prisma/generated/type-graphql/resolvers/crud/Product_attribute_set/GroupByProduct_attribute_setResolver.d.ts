import { GraphQLResolveInfo } from "graphql";
import { GroupByProduct_attribute_setArgs } from "./args/GroupByProduct_attribute_setArgs";
import { Product_attribute_setGroupBy } from "../../outputs/Product_attribute_setGroupBy";
export declare class GroupByProduct_attribute_setResolver {
    groupByProduct_attribute_set(ctx: any, info: GraphQLResolveInfo, args: GroupByProduct_attribute_setArgs): Promise<Product_attribute_setGroupBy[]>;
}
