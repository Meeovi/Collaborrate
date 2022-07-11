import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOpportunitiesArgs } from "./args/AggregateOpportunitiesArgs";
import { Opportunities } from "../../../models/Opportunities";
import { AggregateOpportunities } from "../../outputs/AggregateOpportunities";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Opportunities)
export class AggregateOpportunitiesResolver {
  @TypeGraphQL.Query(_returns => AggregateOpportunities, {
    nullable: false
  })
  async aggregateOpportunities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOpportunitiesArgs): Promise<AggregateOpportunities> {
    return getPrismaFromContext(ctx).opportunities.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
