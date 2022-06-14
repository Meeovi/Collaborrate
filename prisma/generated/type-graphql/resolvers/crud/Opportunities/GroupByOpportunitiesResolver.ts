import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByOpportunitiesArgs } from "./args/GroupByOpportunitiesArgs";
import { Opportunities } from "../../../models/Opportunities";
import { OpportunitiesGroupBy } from "../../outputs/OpportunitiesGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Opportunities)
export class GroupByOpportunitiesResolver {
  @TypeGraphQL.Query(_returns => [OpportunitiesGroupBy], {
    nullable: false
  })
  async groupByOpportunities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByOpportunitiesArgs): Promise<OpportunitiesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).opportunities.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
