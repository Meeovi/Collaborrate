import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneWishlistsArgs } from "./args/DeleteOneWishlistsArgs";
import { Wishlists } from "../../../models/Wishlists";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wishlists)
export class DeleteOneWishlistsResolver {
  @TypeGraphQL.Mutation(_returns => Wishlists, {
    nullable: true
  })
  async deleteOneWishlists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneWishlistsArgs): Promise<Wishlists | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).wishlists.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
