import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneGraphQLConfigArgs } from "./args/DeleteOneGraphQLConfigArgs";
import { GraphQLConfig } from "../../../models/GraphQLConfig";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GraphQLConfig)
export class DeleteOneGraphQLConfigResolver {
  @TypeGraphQL.Mutation(_returns => GraphQLConfig, {
    nullable: true
  })
  async deleteOneGraphQLConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneGraphQLConfigArgs): Promise<GraphQLConfig | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).graphQLConfig.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
