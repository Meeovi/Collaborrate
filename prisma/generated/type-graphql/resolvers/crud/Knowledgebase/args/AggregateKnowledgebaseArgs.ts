import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { KnowledgebaseOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/KnowledgebaseOrderByWithRelationAndSearchRelevanceInput";
import { KnowledgebaseWhereInput } from "../../../inputs/KnowledgebaseWhereInput";
import { KnowledgebaseWhereUniqueInput } from "../../../inputs/KnowledgebaseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateKnowledgebaseArgs {
  @TypeGraphQL.Field(_type => KnowledgebaseWhereInput, {
    nullable: true
  })
  where?: KnowledgebaseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [KnowledgebaseOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: KnowledgebaseOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => KnowledgebaseWhereUniqueInput, {
    nullable: true
  })
  cursor?: KnowledgebaseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
