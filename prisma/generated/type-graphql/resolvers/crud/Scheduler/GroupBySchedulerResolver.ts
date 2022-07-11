import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupBySchedulerArgs } from "./args/GroupBySchedulerArgs";
import { Scheduler } from "../../../models/Scheduler";
import { SchedulerGroupBy } from "../../outputs/SchedulerGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Scheduler)
export class GroupBySchedulerResolver {
  @TypeGraphQL.Query(_returns => [SchedulerGroupBy], {
    nullable: false
  })
  async groupByScheduler(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySchedulerArgs): Promise<SchedulerGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).scheduler.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
