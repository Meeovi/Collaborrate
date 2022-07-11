import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStatesArgs } from "./args/AggregateStatesArgs";
import { States } from "../../../models/States";
import { AggregateStates } from "../../outputs/AggregateStates";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => States)
export class AggregateStatesResolver {
  @TypeGraphQL.Query(_returns => AggregateStates, {
    nullable: false
  })
  async aggregateStates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStatesArgs): Promise<AggregateStates> {
    return getPrismaFromContext(ctx).states.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
