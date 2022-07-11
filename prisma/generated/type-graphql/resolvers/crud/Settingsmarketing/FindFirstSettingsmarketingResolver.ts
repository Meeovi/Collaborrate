import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstSettingsmarketingArgs } from "./args/FindFirstSettingsmarketingArgs";
import { Settingsmarketing } from "../../../models/Settingsmarketing";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingsmarketing)
export class FindFirstSettingsmarketingResolver {
  @TypeGraphQL.Query(_returns => Settingsmarketing, {
    nullable: true
  })
  async findFirstSettingsmarketing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSettingsmarketingArgs): Promise<Settingsmarketing | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsmarketing.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
