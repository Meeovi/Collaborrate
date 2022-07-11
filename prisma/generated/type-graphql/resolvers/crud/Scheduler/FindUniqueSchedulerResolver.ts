import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSchedulerArgs } from "./args/FindUniqueSchedulerArgs";
import { Scheduler } from "../../../models/Scheduler";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Scheduler)
export class FindUniqueSchedulerResolver {
  @TypeGraphQL.Query(_returns => Scheduler, {
    nullable: true
  })
  async scheduler(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSchedulerArgs): Promise<Scheduler | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).scheduler.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
