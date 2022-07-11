import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneSettingssalesArgs } from "./args/DeleteOneSettingssalesArgs";
import { Settingssales } from "../../../models/Settingssales";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingssales)
export class DeleteOneSettingssalesResolver {
  @TypeGraphQL.Mutation(_returns => Settingssales, {
    nullable: true
  })
  async deleteOneSettingssales(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSettingssalesArgs): Promise<Settingssales | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingssales.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
