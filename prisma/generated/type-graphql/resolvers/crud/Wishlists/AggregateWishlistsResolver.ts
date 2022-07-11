import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateWishlistsArgs } from "./args/AggregateWishlistsArgs";
import { Wishlists } from "../../../models/Wishlists";
import { AggregateWishlists } from "../../outputs/AggregateWishlists";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wishlists)
export class AggregateWishlistsResolver {
  @TypeGraphQL.Query(_returns => AggregateWishlists, {
    nullable: false
  })
  async aggregateWishlists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWishlistsArgs): Promise<AggregateWishlists> {
    return getPrismaFromContext(ctx).wishlists.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
