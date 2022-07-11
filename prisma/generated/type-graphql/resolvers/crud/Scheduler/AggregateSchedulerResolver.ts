import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSchedulerArgs } from "./args/AggregateSchedulerArgs";
import { Scheduler } from "../../../models/Scheduler";
import { AggregateScheduler } from "../../outputs/AggregateScheduler";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Scheduler)
export class AggregateSchedulerResolver {
  @TypeGraphQL.Query(_returns => AggregateScheduler, {
    nullable: false
  })
  async aggregateScheduler(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSchedulerArgs): Promise<AggregateScheduler> {
    return getPrismaFromContext(ctx).scheduler.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
