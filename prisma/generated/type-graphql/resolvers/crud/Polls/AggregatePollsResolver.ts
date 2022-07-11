import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePollsArgs } from "./args/AggregatePollsArgs";
import { Polls } from "../../../models/Polls";
import { AggregatePolls } from "../../outputs/AggregatePolls";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Polls)
export class AggregatePollsResolver {
  @TypeGraphQL.Query(_returns => AggregatePolls, {
    nullable: false
  })
  async aggregatePolls(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePollsArgs): Promise<AggregatePolls> {
    return getPrismaFromContext(ctx).polls.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
