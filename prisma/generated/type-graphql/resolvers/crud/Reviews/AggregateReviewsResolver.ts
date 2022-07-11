import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateReviewsArgs } from "./args/AggregateReviewsArgs";
import { Reviews } from "../../../models/Reviews";
import { AggregateReviews } from "../../outputs/AggregateReviews";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Reviews)
export class AggregateReviewsResolver {
  @TypeGraphQL.Query(_returns => AggregateReviews, {
    nullable: false
  })
  async aggregateReviews(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateReviewsArgs): Promise<AggregateReviews> {
    return getPrismaFromContext(ctx).reviews.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
