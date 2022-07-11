import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstSettingshopArgs } from "./args/FindFirstSettingshopArgs";
import { Settingshop } from "../../../models/Settingshop";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingshop)
export class FindFirstSettingshopResolver {
  @TypeGraphQL.Query(_returns => Settingshop, {
    nullable: true
  })
  async findFirstSettingshop(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSettingshopArgs): Promise<Settingshop | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingshop.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
