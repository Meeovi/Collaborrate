import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueDashboardsArgs } from "./args/FindUniqueDashboardsArgs";
import { Dashboards } from "../../../models/Dashboards";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Dashboards)
export class FindUniqueDashboardsResolver {
  @TypeGraphQL.Query(_returns => Dashboards, {
    nullable: true
  })
  async findUniqueDashboards(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueDashboardsArgs): Promise<Dashboards | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).dashboards.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
