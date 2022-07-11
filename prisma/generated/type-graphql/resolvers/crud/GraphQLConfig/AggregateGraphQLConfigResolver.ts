import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGraphQLConfigArgs } from "./args/AggregateGraphQLConfigArgs";
import { GraphQLConfig } from "../../../models/GraphQLConfig";
import { AggregateGraphQLConfig } from "../../outputs/AggregateGraphQLConfig";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GraphQLConfig)
export class AggregateGraphQLConfigResolver {
  @TypeGraphQL.Query(_returns => AggregateGraphQLConfig, {
    nullable: false
  })
  async aggregateGraphQLConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGraphQLConfigArgs): Promise<AggregateGraphQLConfig> {
    return getPrismaFromContext(ctx).graphQLConfig.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
