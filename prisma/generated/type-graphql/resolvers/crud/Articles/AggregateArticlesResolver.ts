import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateArticlesArgs } from "./args/AggregateArticlesArgs";
import { Articles } from "../../../models/Articles";
import { AggregateArticles } from "../../outputs/AggregateArticles";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Articles)
export class AggregateArticlesResolver {
  @TypeGraphQL.Query(_returns => AggregateArticles, {
    nullable: false
  })
  async aggregateArticles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateArticlesArgs): Promise<AggregateArticles> {
    return getPrismaFromContext(ctx).articles.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
