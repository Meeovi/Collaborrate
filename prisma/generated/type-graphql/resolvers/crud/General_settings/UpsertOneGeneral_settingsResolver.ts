import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneGeneral_settingsArgs } from "./args/UpsertOneGeneral_settingsArgs";
import { General_settings } from "../../../models/General_settings";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => General_settings)
export class UpsertOneGeneral_settingsResolver {
  @TypeGraphQL.Mutation(_returns => General_settings, {
    nullable: false
  })
  async upsertOneGeneral_settings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneGeneral_settingsArgs): Promise<General_settings> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).general_settings.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
