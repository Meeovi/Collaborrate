import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstKnowledgebaseArgs } from "./args/FindFirstKnowledgebaseArgs";
import { Knowledgebase } from "../../../models/Knowledgebase";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Knowledgebase)
export class FindFirstKnowledgebaseResolver {
  @TypeGraphQL.Query(_returns => Knowledgebase, {
    nullable: true
  })
  async findFirstKnowledgebase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstKnowledgebaseArgs): Promise<Knowledgebase | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).knowledgebase.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
