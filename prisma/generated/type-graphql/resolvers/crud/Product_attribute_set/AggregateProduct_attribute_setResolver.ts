import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProduct_attribute_setArgs } from "./args/AggregateProduct_attribute_setArgs";
import { Product_attribute_set } from "../../../models/Product_attribute_set";
import { AggregateProduct_attribute_set } from "../../outputs/AggregateProduct_attribute_set";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product_attribute_set)
export class AggregateProduct_attribute_setResolver {
  @TypeGraphQL.Query(_returns => AggregateProduct_attribute_set, {
    nullable: false
  })
  async aggregateProduct_attribute_set(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProduct_attribute_setArgs): Promise<AggregateProduct_attribute_set> {
    return getPrismaFromContext(ctx).product_attribute_set.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
