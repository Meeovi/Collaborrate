import * as TypeGraphQL from "type-graphql";
import { Coupons } from "../../../models/Coupons";
import { Products } from "../../../models/Products";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Coupons)
export class CouponsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: false
  })
  async products_couponsToproducts(@TypeGraphQL.Root() coupons: Coupons, @TypeGraphQL.Ctx() ctx: any): Promise<Products> {
    return getPrismaFromContext(ctx).coupons.findUnique({
      where: {
        id: coupons.id,
      },
    }).products_couponsToproducts({});
  }
}
