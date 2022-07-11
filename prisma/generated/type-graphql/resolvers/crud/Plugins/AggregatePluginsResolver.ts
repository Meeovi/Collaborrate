import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePluginsArgs } from "./args/AggregatePluginsArgs";
import { Plugins } from "../../../models/Plugins";
import { AggregatePlugins } from "../../outputs/AggregatePlugins";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Plugins)
export class AggregatePluginsResolver {
  @TypeGraphQL.Query(_returns => AggregatePlugins, {
    nullable: false
  })
  async aggregatePlugins(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePluginsArgs): Promise<AggregatePlugins> {
    return getPrismaFromContext(ctx).plugins.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
