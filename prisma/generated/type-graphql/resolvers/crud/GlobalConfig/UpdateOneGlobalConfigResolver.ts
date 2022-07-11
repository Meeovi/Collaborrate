import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneGlobalConfigArgs } from "./args/UpdateOneGlobalConfigArgs";
import { GlobalConfig } from "../../../models/GlobalConfig";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GlobalConfig)
export class UpdateOneGlobalConfigResolver {
  @TypeGraphQL.Mutation(_returns => GlobalConfig, {
    nullable: true
  })
  async updateOneGlobalConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneGlobalConfigArgs): Promise<GlobalConfig | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).globalConfig.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
