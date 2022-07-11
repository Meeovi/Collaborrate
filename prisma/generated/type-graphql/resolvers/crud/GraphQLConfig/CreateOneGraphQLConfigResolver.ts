import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneGraphQLConfigArgs } from "./args/CreateOneGraphQLConfigArgs";
import { GraphQLConfig } from "../../../models/GraphQLConfig";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GraphQLConfig)
export class CreateOneGraphQLConfigResolver {
  @TypeGraphQL.Mutation(_returns => GraphQLConfig, {
    nullable: false
  })
  async createOneGraphQLConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneGraphQLConfigArgs): Promise<GraphQLConfig> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).graphQLConfig.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
