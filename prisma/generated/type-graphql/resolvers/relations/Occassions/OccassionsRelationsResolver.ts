import * as TypeGraphQL from "type-graphql";
import { Occassions } from "../../../models/Occassions";
import { Products } from "../../../models/Products";
import { Wishlists } from "../../../models/Wishlists";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Occassions)
export class OccassionsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: true
  })
  async products_occassionsToproducts(@TypeGraphQL.Root() occassions: Occassions, @TypeGraphQL.Ctx() ctx: any): Promise<Products | null> {
    return getPrismaFromContext(ctx).occassions.findUnique({
      where: {
        id: occassions.id,
      },
    }).products_occassionsToproducts({});
  }

  @TypeGraphQL.FieldResolver(_type => Wishlists, {
    nullable: true
  })
  async wishlists_occassionsTowishlists(@TypeGraphQL.Root() occassions: Occassions, @TypeGraphQL.Ctx() ctx: any): Promise<Wishlists | null> {
    return getPrismaFromContext(ctx).occassions.findUnique({
      where: {
        id: occassions.id,
      },
    }).wishlists_occassionsTowishlists({});
  }
}
