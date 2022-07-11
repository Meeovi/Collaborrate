import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneShop_settingsArgs } from "./args/UpdateOneShop_settingsArgs";
import { Shop_settings } from "../../../models/Shop_settings";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shop_settings)
export class UpdateOneShop_settingsResolver {
  @TypeGraphQL.Mutation(_returns => Shop_settings, {
    nullable: true
  })
  async updateOneShop_settings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneShop_settingsArgs): Promise<Shop_settings | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shop_settings.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
