import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRatingArgs } from "./args/AggregateRatingArgs";
import { Rating } from "../../../models/Rating";
import { AggregateRating } from "../../outputs/AggregateRating";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Rating)
export class AggregateRatingResolver {
  @TypeGraphQL.Query(_returns => AggregateRating, {
    nullable: false
  })
  async aggregateRating(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRatingArgs): Promise<AggregateRating> {
    return getPrismaFromContext(ctx).rating.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
