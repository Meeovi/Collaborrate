import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateShop_settingsArgs } from "./args/AggregateShop_settingsArgs";
import { Shop_settings } from "../../../models/Shop_settings";
import { AggregateShop_settings } from "../../outputs/AggregateShop_settings";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shop_settings)
export class AggregateShop_settingsResolver {
  @TypeGraphQL.Query(_returns => AggregateShop_settings, {
    nullable: false
  })
  async aggregateShop_settings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateShop_settingsArgs): Promise<AggregateShop_settings> {
    return getPrismaFromContext(ctx).shop_settings.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
