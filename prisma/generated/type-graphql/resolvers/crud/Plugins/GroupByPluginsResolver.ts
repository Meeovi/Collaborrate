import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByPluginsArgs } from "./args/GroupByPluginsArgs";
import { Plugins } from "../../../models/Plugins";
import { PluginsGroupBy } from "../../outputs/PluginsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Plugins)
export class GroupByPluginsResolver {
  @TypeGraphQL.Query(_returns => [PluginsGroupBy], {
    nullable: false
  })
  async groupByPlugins(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPluginsArgs): Promise<PluginsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).plugins.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
