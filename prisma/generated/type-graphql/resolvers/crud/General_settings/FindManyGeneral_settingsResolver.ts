import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyGeneral_settingsArgs } from "./args/FindManyGeneral_settingsArgs";
import { General_settings } from "../../../models/General_settings";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => General_settings)
export class FindManyGeneral_settingsResolver {
  @TypeGraphQL.Query(_returns => [General_settings], {
    nullable: false
  })
  async findManyGeneral_settings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGeneral_settingsArgs): Promise<General_settings[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).general_settings.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
