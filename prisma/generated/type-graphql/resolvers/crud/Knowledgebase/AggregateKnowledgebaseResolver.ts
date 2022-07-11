import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateKnowledgebaseArgs } from "./args/AggregateKnowledgebaseArgs";
import { Knowledgebase } from "../../../models/Knowledgebase";
import { AggregateKnowledgebase } from "../../outputs/AggregateKnowledgebase";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Knowledgebase)
export class AggregateKnowledgebaseResolver {
  @TypeGraphQL.Query(_returns => AggregateKnowledgebase, {
    nullable: false
  })
  async aggregateKnowledgebase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateKnowledgebaseArgs): Promise<AggregateKnowledgebase> {
    return getPrismaFromContext(ctx).knowledgebase.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
