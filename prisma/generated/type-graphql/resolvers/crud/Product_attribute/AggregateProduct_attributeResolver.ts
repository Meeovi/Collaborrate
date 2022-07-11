import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProduct_attributeArgs } from "./args/AggregateProduct_attributeArgs";
import { Product_attribute } from "../../../models/Product_attribute";
import { AggregateProduct_attribute } from "../../outputs/AggregateProduct_attribute";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product_attribute)
export class AggregateProduct_attributeResolver {
  @TypeGraphQL.Query(_returns => AggregateProduct_attribute, {
    nullable: false
  })
  async aggregateProduct_attribute(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProduct_attributeArgs): Promise<AggregateProduct_attribute> {
    return getPrismaFromContext(ctx).product_attribute.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
