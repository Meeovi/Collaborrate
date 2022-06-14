import * as TypeGraphQL from "type-graphql";
import { Product_attribute } from "../../../models/Product_attribute";
import { Product_attribute_set } from "../../../models/Product_attribute_set";
import { Products } from "../../../models/Products";
import { Product_attributeProduct_attribute_setArgs } from "./args/Product_attributeProduct_attribute_setArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product_attribute)
export class Product_attributeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: false
  })
  async products(@TypeGraphQL.Root() product_attribute: Product_attribute, @TypeGraphQL.Ctx() ctx: any): Promise<Products> {
    return getPrismaFromContext(ctx).product_attribute.findUnique({
      where: {
        id: product_attribute.id,
      },
    }).products({});
  }

  @TypeGraphQL.FieldResolver(_type => [Product_attribute_set], {
    nullable: false
  })
  async product_attribute_set(@TypeGraphQL.Root() product_attribute: Product_attribute, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: Product_attributeProduct_attribute_setArgs): Promise<Product_attribute_set[]> {
    return getPrismaFromContext(ctx).product_attribute.findUnique({
      where: {
        id: product_attribute.id,
      },
    }).product_attribute_set(args);
  }
}
