import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByShop_settingsArgs } from "./args/GroupByShop_settingsArgs";
import { Shop_settings } from "../../../models/Shop_settings";
import { Shop_settingsGroupBy } from "../../outputs/Shop_settingsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shop_settings)
export class GroupByShop_settingsResolver {
  @TypeGraphQL.Query(_returns => [Shop_settingsGroupBy], {
    nullable: false
  })
  async groupByShop_settings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByShop_settingsArgs): Promise<Shop_settingsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shop_settings.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
