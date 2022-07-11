import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneProduct_attributeArgs } from "./args/UpsertOneProduct_attributeArgs";
import { Product_attribute } from "../../../models/Product_attribute";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product_attribute)
export class UpsertOneProduct_attributeResolver {
  @TypeGraphQL.Mutation(_returns => Product_attribute, {
    nullable: false
  })
  async upsertOneProduct_attribute(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneProduct_attributeArgs): Promise<Product_attribute> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
