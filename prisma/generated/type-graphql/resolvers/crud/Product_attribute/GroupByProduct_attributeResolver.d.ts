import { GraphQLResolveInfo } from "graphql";
import { GroupByProduct_attributeArgs } from "./args/GroupByProduct_attributeArgs";
import { Product_attributeGroupBy } from "../../outputs/Product_attributeGroupBy";
export declare class GroupByProduct_attributeResolver {
    groupByProduct_attribute(ctx: any, info: GraphQLResolveInfo, args: GroupByProduct_attributeArgs): Promise<Product_attributeGroupBy[]>;
}
