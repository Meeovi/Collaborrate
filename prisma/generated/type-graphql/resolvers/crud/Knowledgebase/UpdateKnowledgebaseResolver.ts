import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateKnowledgebaseArgs } from "./args/UpdateKnowledgebaseArgs";
import { Knowledgebase } from "../../../models/Knowledgebase";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Knowledgebase)
export class UpdateKnowledgebaseResolver {
  @TypeGraphQL.Mutation(_returns => Knowledgebase, {
    nullable: true
  })
  async updateKnowledgebase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateKnowledgebaseArgs): Promise<Knowledgebase | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).knowledgebase.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
