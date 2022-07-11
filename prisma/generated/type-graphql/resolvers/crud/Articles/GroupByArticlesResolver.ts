import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByArticlesArgs } from "./args/GroupByArticlesArgs";
import { Articles } from "../../../models/Articles";
import { ArticlesGroupBy } from "../../outputs/ArticlesGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Articles)
export class GroupByArticlesResolver {
  @TypeGraphQL.Query(_returns => [ArticlesGroupBy], {
    nullable: false
  })
  async groupByArticles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByArticlesArgs): Promise<ArticlesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).articles.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
