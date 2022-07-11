import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateJobScheduleArgs } from "./args/AggregateJobScheduleArgs";
import { JobSchedule } from "../../../models/JobSchedule";
import { AggregateJobSchedule } from "../../outputs/AggregateJobSchedule";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => JobSchedule)
export class AggregateJobScheduleResolver {
  @TypeGraphQL.Query(_returns => AggregateJobSchedule, {
    nullable: false
  })
  async aggregateJobSchedule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateJobScheduleArgs): Promise<AggregateJobSchedule> {
    return getPrismaFromContext(ctx).jobSchedule.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
