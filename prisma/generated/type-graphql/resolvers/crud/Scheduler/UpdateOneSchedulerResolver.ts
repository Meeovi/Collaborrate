import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneSchedulerArgs } from "./args/UpdateOneSchedulerArgs";
import { Scheduler } from "../../../models/Scheduler";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Scheduler)
export class UpdateOneSchedulerResolver {
  @TypeGraphQL.Mutation(_returns => Scheduler, {
    nullable: true
  })
  async updateOneScheduler(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSchedulerArgs): Promise<Scheduler | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).scheduler.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
