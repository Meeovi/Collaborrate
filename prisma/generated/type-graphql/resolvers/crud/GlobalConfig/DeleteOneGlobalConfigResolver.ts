import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneGlobalConfigArgs } from "./args/DeleteOneGlobalConfigArgs";
import { GlobalConfig } from "../../../models/GlobalConfig";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GlobalConfig)
export class DeleteOneGlobalConfigResolver {
  @TypeGraphQL.Mutation(_returns => GlobalConfig, {
    nullable: true
  })
  async deleteOneGlobalConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneGlobalConfigArgs): Promise<GlobalConfig | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).globalConfig.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
