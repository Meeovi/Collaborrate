import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByProduct_attribute_setArgs } from "./args/GroupByProduct_attribute_setArgs";
import { Product_attribute_set } from "../../../models/Product_attribute_set";
import { Product_attribute_setGroupBy } from "../../outputs/Product_attribute_setGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product_attribute_set)
export class GroupByProduct_attribute_setResolver {
  @TypeGraphQL.Query(_returns => [Product_attribute_setGroupBy], {
    nullable: false
  })
  async groupByProduct_attribute_set(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProduct_attribute_setArgs): Promise<Product_attribute_setGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute_set.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
