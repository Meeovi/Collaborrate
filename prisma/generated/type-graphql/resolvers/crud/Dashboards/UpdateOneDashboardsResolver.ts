import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneDashboardsArgs } from "./args/UpdateOneDashboardsArgs";
import { Dashboards } from "../../../models/Dashboards";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Dashboards)
export class UpdateOneDashboardsResolver {
  @TypeGraphQL.Mutation(_returns => Dashboards, {
    nullable: true
  })
  async updateOneDashboards(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneDashboardsArgs): Promise<Dashboards | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).dashboards.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
