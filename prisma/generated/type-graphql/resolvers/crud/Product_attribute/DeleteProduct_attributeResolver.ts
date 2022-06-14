import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteProduct_attributeArgs } from "./args/DeleteProduct_attributeArgs";
import { Product_attribute } from "../../../models/Product_attribute";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product_attribute)
export class DeleteProduct_attributeResolver {
  @TypeGraphQL.Mutation(_returns => Product_attribute, {
    nullable: true
  })
  async deleteProduct_attribute(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteProduct_attributeArgs): Promise<Product_attribute | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
