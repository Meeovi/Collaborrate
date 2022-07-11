import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByGlobalConfigArgs } from "./args/GroupByGlobalConfigArgs";
import { GlobalConfig } from "../../../models/GlobalConfig";
import { GlobalConfigGroupBy } from "../../outputs/GlobalConfigGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GlobalConfig)
export class GroupByGlobalConfigResolver {
  @TypeGraphQL.Query(_returns => [GlobalConfigGroupBy], {
    nullable: false
  })
  async groupByGlobalConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGlobalConfigArgs): Promise<GlobalConfigGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).globalConfig.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
