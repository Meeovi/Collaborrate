import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupBySettingsgeneralArgs } from "./args/GroupBySettingsgeneralArgs";
import { Settingsgeneral } from "../../../models/Settingsgeneral";
import { SettingsgeneralGroupBy } from "../../outputs/SettingsgeneralGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingsgeneral)
export class GroupBySettingsgeneralResolver {
  @TypeGraphQL.Query(_returns => [SettingsgeneralGroupBy], {
    nullable: false
  })
  async groupBySettingsgeneral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySettingsgeneralArgs): Promise<SettingsgeneralGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsgeneral.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
