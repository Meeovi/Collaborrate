import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDashboardsArgs } from "./args/AggregateDashboardsArgs";
import { Dashboards } from "../../../models/Dashboards";
import { AggregateDashboards } from "../../outputs/AggregateDashboards";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Dashboards)
export class AggregateDashboardsResolver {
  @TypeGraphQL.Query(_returns => AggregateDashboards, {
    nullable: false
  })
  async aggregateDashboards(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDashboardsArgs): Promise<AggregateDashboards> {
    return getPrismaFromContext(ctx).dashboards.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
