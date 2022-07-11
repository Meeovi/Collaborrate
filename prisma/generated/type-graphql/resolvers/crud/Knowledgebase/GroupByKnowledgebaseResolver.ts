import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByKnowledgebaseArgs } from "./args/GroupByKnowledgebaseArgs";
import { Knowledgebase } from "../../../models/Knowledgebase";
import { KnowledgebaseGroupBy } from "../../outputs/KnowledgebaseGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Knowledgebase)
export class GroupByKnowledgebaseResolver {
  @TypeGraphQL.Query(_returns => [KnowledgebaseGroupBy], {
    nullable: false
  })
  async groupByKnowledgebase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByKnowledgebaseArgs): Promise<KnowledgebaseGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).knowledgebase.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
