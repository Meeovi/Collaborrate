import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyGraphQLConfigArgs } from "./args/FindManyGraphQLConfigArgs";
import { GraphQLConfig } from "../../../models/GraphQLConfig";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GraphQLConfig)
export class FindManyGraphQLConfigResolver {
  @TypeGraphQL.Query(_returns => [GraphQLConfig], {
    nullable: false
  })
  async graphQLConfigs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGraphQLConfigArgs): Promise<GraphQLConfig[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).graphQLConfig.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
