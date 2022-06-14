import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVisitsArgs } from "./args/AggregateVisitsArgs";
import { Visits } from "../../../models/Visits";
import { AggregateVisits } from "../../outputs/AggregateVisits";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Visits)
export class AggregateVisitsResolver {
  @TypeGraphQL.Query(_returns => AggregateVisits, {
    nullable: false
  })
  async aggregateVisits(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVisitsArgs): Promise<AggregateVisits> {
    return getPrismaFromContext(ctx).visits.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
