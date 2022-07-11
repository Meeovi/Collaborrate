import * as TypeGraphQL from "type-graphql";
import { Products } from "../../../models/Products";
import { Rating } from "../../../models/Rating";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Rating)
export class RatingRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: false
  })
  async products(@TypeGraphQL.Root() rating: Rating, @TypeGraphQL.Ctx() ctx: any): Promise<Products> {
    return getPrismaFromContext(ctx).rating.findUnique({
      where: {
        id: rating.id,
      },
    }).products({});
  }
}
