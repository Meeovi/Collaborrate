import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneJobScheduleArgs } from "./args/CreateOneJobScheduleArgs";
import { JobSchedule } from "../../../models/JobSchedule";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => JobSchedule)
export class CreateOneJobScheduleResolver {
  @TypeGraphQL.Mutation(_returns => JobSchedule, {
    nullable: false
  })
  async createOneJobSchedule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneJobScheduleArgs): Promise<JobSchedule> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).jobSchedule.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
