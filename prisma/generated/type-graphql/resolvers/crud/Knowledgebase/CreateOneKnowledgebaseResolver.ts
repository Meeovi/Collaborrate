import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneKnowledgebaseArgs } from "./args/CreateOneKnowledgebaseArgs";
import { Knowledgebase } from "../../../models/Knowledgebase";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Knowledgebase)
export class CreateOneKnowledgebaseResolver {
  @TypeGraphQL.Mutation(_returns => Knowledgebase, {
    nullable: false
  })
  async createOneKnowledgebase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneKnowledgebaseArgs): Promise<Knowledgebase> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).knowledgebase.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
