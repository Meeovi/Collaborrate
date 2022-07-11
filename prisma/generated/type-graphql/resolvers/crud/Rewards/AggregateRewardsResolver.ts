import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRewardsArgs } from "./args/AggregateRewardsArgs";
import { Rewards } from "../../../models/Rewards";
import { AggregateRewards } from "../../outputs/AggregateRewards";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Rewards)
export class AggregateRewardsResolver {
  @TypeGraphQL.Query(_returns => AggregateRewards, {
    nullable: false
  })
  async aggregateRewards(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRewardsArgs): Promise<AggregateRewards> {
    return getPrismaFromContext(ctx).rewards.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
