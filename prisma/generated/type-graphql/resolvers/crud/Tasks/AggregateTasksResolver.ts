import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTasksArgs } from "./args/AggregateTasksArgs";
import { Tasks } from "../../../models/Tasks";
import { AggregateTasks } from "../../outputs/AggregateTasks";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tasks)
export class AggregateTasksResolver {
  @TypeGraphQL.Query(_returns => AggregateTasks, {
    nullable: false
  })
  async aggregateTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTasksArgs): Promise<AggregateTasks> {
    return getPrismaFromContext(ctx).tasks.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
