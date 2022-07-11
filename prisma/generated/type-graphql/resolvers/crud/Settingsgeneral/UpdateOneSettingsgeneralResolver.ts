import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneSettingsgeneralArgs } from "./args/UpdateOneSettingsgeneralArgs";
import { Settingsgeneral } from "../../../models/Settingsgeneral";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingsgeneral)
export class UpdateOneSettingsgeneralResolver {
  @TypeGraphQL.Mutation(_returns => Settingsgeneral, {
    nullable: true
  })
  async updateOneSettingsgeneral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSettingsgeneralArgs): Promise<Settingsgeneral | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsgeneral.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
