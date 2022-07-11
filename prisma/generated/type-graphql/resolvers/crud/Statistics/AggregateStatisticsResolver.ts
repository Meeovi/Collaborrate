import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStatisticsArgs } from "./args/AggregateStatisticsArgs";
import { Statistics } from "../../../models/Statistics";
import { AggregateStatistics } from "../../outputs/AggregateStatistics";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Statistics)
export class AggregateStatisticsResolver {
  @TypeGraphQL.Query(_returns => AggregateStatistics, {
    nullable: false
  })
  async aggregateStatistics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStatisticsArgs): Promise<AggregateStatistics> {
    return getPrismaFromContext(ctx).statistics.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
