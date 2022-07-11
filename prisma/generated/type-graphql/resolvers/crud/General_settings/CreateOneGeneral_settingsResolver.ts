import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneGeneral_settingsArgs } from "./args/CreateOneGeneral_settingsArgs";
import { General_settings } from "../../../models/General_settings";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => General_settings)
export class CreateOneGeneral_settingsResolver {
  @TypeGraphQL.Mutation(_returns => General_settings, {
    nullable: false
  })
  async createOneGeneral_settings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneGeneral_settingsArgs): Promise<General_settings> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).general_settings.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
