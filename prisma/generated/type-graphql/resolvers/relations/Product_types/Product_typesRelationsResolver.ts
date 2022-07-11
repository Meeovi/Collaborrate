import * as TypeGraphQL from "type-graphql";
import { Product_types } from "../../../models/Product_types";
import { Products } from "../../../models/Products";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product_types)
export class Product_typesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: false
  })
  async products(@TypeGraphQL.Root() product_types: Product_types, @TypeGraphQL.Ctx() ctx: any): Promise<Products> {
    return getPrismaFromContext(ctx).product_types.findUnique({
      where: {
        id: product_types.id,
      },
    }).products({});
  }
}
