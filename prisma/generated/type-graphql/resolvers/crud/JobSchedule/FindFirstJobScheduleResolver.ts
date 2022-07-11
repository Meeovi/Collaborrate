import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstJobScheduleArgs } from "./args/FindFirstJobScheduleArgs";
import { JobSchedule } from "../../../models/JobSchedule";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => JobSchedule)
export class FindFirstJobScheduleResolver {
  @TypeGraphQL.Query(_returns => JobSchedule, {
    nullable: true
  })
  async findFirstJobSchedule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstJobScheduleArgs): Promise<JobSchedule | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).jobSchedule.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
