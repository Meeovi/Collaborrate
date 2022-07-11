import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupBySettingscustomersArgs } from "./args/GroupBySettingscustomersArgs";
import { Settingscustomers } from "../../../models/Settingscustomers";
import { SettingscustomersGroupBy } from "../../outputs/SettingscustomersGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingscustomers)
export class GroupBySettingscustomersResolver {
  @TypeGraphQL.Query(_returns => [SettingscustomersGroupBy], {
    nullable: false
  })
  async groupBySettingscustomers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySettingscustomersArgs): Promise<SettingscustomersGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingscustomers.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
