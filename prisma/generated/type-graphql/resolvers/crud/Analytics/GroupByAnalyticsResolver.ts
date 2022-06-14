import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByAnalyticsArgs } from "./args/GroupByAnalyticsArgs";
import { Analytics } from "../../../models/Analytics";
import { AnalyticsGroupBy } from "../../outputs/AnalyticsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Analytics)
export class GroupByAnalyticsResolver {
  @TypeGraphQL.Query(_returns => [AnalyticsGroupBy], {
    nullable: false
  })
  async groupByAnalytics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAnalyticsArgs): Promise<AnalyticsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).analytics.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
