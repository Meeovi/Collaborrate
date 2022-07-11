import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLeadsArgs } from "./args/AggregateLeadsArgs";
import { Leads } from "../../../models/Leads";
import { AggregateLeads } from "../../outputs/AggregateLeads";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Leads)
export class AggregateLeadsResolver {
  @TypeGraphQL.Query(_returns => AggregateLeads, {
    nullable: false
  })
  async aggregateLeads(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLeadsArgs): Promise<AggregateLeads> {
    return getPrismaFromContext(ctx).leads.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
