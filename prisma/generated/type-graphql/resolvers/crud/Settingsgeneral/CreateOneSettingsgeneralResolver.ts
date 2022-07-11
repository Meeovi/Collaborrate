import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneSettingsgeneralArgs } from "./args/CreateOneSettingsgeneralArgs";
import { Settingsgeneral } from "../../../models/Settingsgeneral";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingsgeneral)
export class CreateOneSettingsgeneralResolver {
  @TypeGraphQL.Mutation(_returns => Settingsgeneral, {
    nullable: false
  })
  async createOneSettingsgeneral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSettingsgeneralArgs): Promise<Settingsgeneral> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsgeneral.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
