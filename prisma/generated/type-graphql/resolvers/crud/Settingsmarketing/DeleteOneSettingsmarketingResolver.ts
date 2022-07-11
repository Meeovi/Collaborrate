import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneSettingsmarketingArgs } from "./args/DeleteOneSettingsmarketingArgs";
import { Settingsmarketing } from "../../../models/Settingsmarketing";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingsmarketing)
export class DeleteOneSettingsmarketingResolver {
  @TypeGraphQL.Mutation(_returns => Settingsmarketing, {
    nullable: true
  })
  async deleteOneSettingsmarketing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSettingsmarketingArgs): Promise<Settingsmarketing | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsmarketing.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
