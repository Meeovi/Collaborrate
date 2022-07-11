import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneShop_settingsArgs } from "./args/UpsertOneShop_settingsArgs";
import { Shop_settings } from "../../../models/Shop_settings";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shop_settings)
export class UpsertOneShop_settingsResolver {
  @TypeGraphQL.Mutation(_returns => Shop_settings, {
    nullable: false
  })
  async upsertOneShop_settings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneShop_settingsArgs): Promise<Shop_settings> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shop_settings.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
