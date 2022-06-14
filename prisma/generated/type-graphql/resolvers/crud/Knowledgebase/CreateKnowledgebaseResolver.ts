import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateKnowledgebaseArgs } from "./args/CreateKnowledgebaseArgs";
import { Knowledgebase } from "../../../models/Knowledgebase";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Knowledgebase)
export class CreateKnowledgebaseResolver {
  @TypeGraphQL.Mutation(_returns => Knowledgebase, {
    nullable: false
  })
  async createKnowledgebase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateKnowledgebaseArgs): Promise<Knowledgebase> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).knowledgebase.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
