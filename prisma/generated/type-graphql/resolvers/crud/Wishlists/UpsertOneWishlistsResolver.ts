import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneWishlistsArgs } from "./args/UpsertOneWishlistsArgs";
import { Wishlists } from "../../../models/Wishlists";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wishlists)
export class UpsertOneWishlistsResolver {
  @TypeGraphQL.Mutation(_returns => Wishlists, {
    nullable: false
  })
  async upsertOneWishlists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneWishlistsArgs): Promise<Wishlists> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).wishlists.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
