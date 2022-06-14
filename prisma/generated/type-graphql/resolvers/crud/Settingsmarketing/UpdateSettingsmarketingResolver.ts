import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateSettingsmarketingArgs } from "./args/UpdateSettingsmarketingArgs";
import { Settingsmarketing } from "../../../models/Settingsmarketing";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingsmarketing)
export class UpdateSettingsmarketingResolver {
  @TypeGraphQL.Mutation(_returns => Settingsmarketing, {
    nullable: true
  })
  async updateSettingsmarketing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateSettingsmarketingArgs): Promise<Settingsmarketing | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsmarketing.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
