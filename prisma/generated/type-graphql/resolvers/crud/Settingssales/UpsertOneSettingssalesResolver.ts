import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneSettingssalesArgs } from "./args/UpsertOneSettingssalesArgs";
import { Settingssales } from "../../../models/Settingssales";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingssales)
export class UpsertOneSettingssalesResolver {
  @TypeGraphQL.Mutation(_returns => Settingssales, {
    nullable: false
  })
  async upsertOneSettingssales(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSettingssalesArgs): Promise<Settingssales> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingssales.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
