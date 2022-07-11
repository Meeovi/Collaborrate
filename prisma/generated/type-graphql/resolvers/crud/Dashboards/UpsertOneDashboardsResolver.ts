import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneDashboardsArgs } from "./args/UpsertOneDashboardsArgs";
import { Dashboards } from "../../../models/Dashboards";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Dashboards)
export class UpsertOneDashboardsResolver {
  @TypeGraphQL.Mutation(_returns => Dashboards, {
    nullable: false
  })
  async upsertOneDashboards(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneDashboardsArgs): Promise<Dashboards> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).dashboards.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
