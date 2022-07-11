import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneSettingsgeneralArgs } from "./args/UpsertOneSettingsgeneralArgs";
import { Settingsgeneral } from "../../../models/Settingsgeneral";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingsgeneral)
export class UpsertOneSettingsgeneralResolver {
  @TypeGraphQL.Mutation(_returns => Settingsgeneral, {
    nullable: false
  })
  async upsertOneSettingsgeneral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSettingsgeneralArgs): Promise<Settingsgeneral> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsgeneral.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
