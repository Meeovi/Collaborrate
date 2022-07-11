import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByGeneral_settingsArgs } from "./args/GroupByGeneral_settingsArgs";
import { General_settings } from "../../../models/General_settings";
import { General_settingsGroupBy } from "../../outputs/General_settingsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => General_settings)
export class GroupByGeneral_settingsResolver {
  @TypeGraphQL.Query(_returns => [General_settingsGroupBy], {
    nullable: false
  })
  async groupByGeneral_settings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGeneral_settingsArgs): Promise<General_settingsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).general_settings.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
