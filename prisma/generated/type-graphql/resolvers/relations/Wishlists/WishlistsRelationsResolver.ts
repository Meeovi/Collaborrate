import * as TypeGraphQL from "type-graphql";
import { Occassions } from "../../../models/Occassions";
import { Wishlists } from "../../../models/Wishlists";
import { WishlistsOccassionsArgs } from "./args/WishlistsOccassionsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wishlists)
export class WishlistsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Occassions], {
    nullable: false
  })
  async occassions(@TypeGraphQL.Root() wishlists: Wishlists, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: WishlistsOccassionsArgs): Promise<Occassions[]> {
    return getPrismaFromContext(ctx).wishlists.findUnique({
      where: {
        id: wishlists.id,
      },
    }).occassions(args);
  }
}
