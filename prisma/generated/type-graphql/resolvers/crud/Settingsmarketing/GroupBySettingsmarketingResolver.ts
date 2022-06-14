import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupBySettingsmarketingArgs } from "./args/GroupBySettingsmarketingArgs";
import { Settingsmarketing } from "../../../models/Settingsmarketing";
import { SettingsmarketingGroupBy } from "../../outputs/SettingsmarketingGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingsmarketing)
export class GroupBySettingsmarketingResolver {
  @TypeGraphQL.Query(_returns => [SettingsmarketingGroupBy], {
    nullable: false
  })
  async groupBySettingsmarketing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySettingsmarketingArgs): Promise<SettingsmarketingGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsmarketing.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
