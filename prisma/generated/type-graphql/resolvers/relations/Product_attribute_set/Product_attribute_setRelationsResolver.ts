import * as TypeGraphQL from "type-graphql";
import { Product_attribute } from "../../../models/Product_attribute";
import { Product_attribute_set } from "../../../models/Product_attribute_set";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product_attribute_set)
export class Product_attribute_setRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Product_attribute, {
    nullable: false
  })
  async product_attribute(@TypeGraphQL.Root() product_attribute_set: Product_attribute_set, @TypeGraphQL.Ctx() ctx: any): Promise<Product_attribute> {
    return getPrismaFromContext(ctx).product_attribute_set.findUnique({
      where: {
        id: product_attribute_set.id,
      },
    }).product_attribute({});
  }
}
