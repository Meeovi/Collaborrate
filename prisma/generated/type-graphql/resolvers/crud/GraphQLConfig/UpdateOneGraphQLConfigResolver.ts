import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneGraphQLConfigArgs } from "./args/UpdateOneGraphQLConfigArgs";
import { GraphQLConfig } from "../../../models/GraphQLConfig";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GraphQLConfig)
export class UpdateOneGraphQLConfigResolver {
  @TypeGraphQL.Mutation(_returns => GraphQLConfig, {
    nullable: true
  })
  async updateOneGraphQLConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneGraphQLConfigArgs): Promise<GraphQLConfig | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).graphQLConfig.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
