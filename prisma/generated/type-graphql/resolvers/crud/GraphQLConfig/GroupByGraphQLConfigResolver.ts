import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByGraphQLConfigArgs } from "./args/GroupByGraphQLConfigArgs";
import { GraphQLConfig } from "../../../models/GraphQLConfig";
import { GraphQLConfigGroupBy } from "../../outputs/GraphQLConfigGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GraphQLConfig)
export class GroupByGraphQLConfigResolver {
  @TypeGraphQL.Query(_returns => [GraphQLConfigGroupBy], {
    nullable: false
  })
  async groupByGraphQLConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGraphQLConfigArgs): Promise<GraphQLConfigGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).graphQLConfig.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
