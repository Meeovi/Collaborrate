import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAnalyticsArgs } from "./args/AggregateAnalyticsArgs";
import { Analytics } from "../../../models/Analytics";
import { AggregateAnalytics } from "../../outputs/AggregateAnalytics";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Analytics)
export class AggregateAnalyticsResolver {
  @TypeGraphQL.Query(_returns => AggregateAnalytics, {
    nullable: false
  })
  async aggregateAnalytics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAnalyticsArgs): Promise<AggregateAnalytics> {
    return getPrismaFromContext(ctx).analytics.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
