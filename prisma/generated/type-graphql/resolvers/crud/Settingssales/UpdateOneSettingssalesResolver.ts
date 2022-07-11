import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneSettingssalesArgs } from "./args/UpdateOneSettingssalesArgs";
import { Settingssales } from "../../../models/Settingssales";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingssales)
export class UpdateOneSettingssalesResolver {
  @TypeGraphQL.Mutation(_returns => Settingssales, {
    nullable: true
  })
  async updateOneSettingssales(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSettingssalesArgs): Promise<Settingssales | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingssales.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
