import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { KnowledgebaseCreateInput } from "../../../inputs/KnowledgebaseCreateInput";
import { KnowledgebaseUpdateInput } from "../../../inputs/KnowledgebaseUpdateInput";
import { KnowledgebaseWhereUniqueInput } from "../../../inputs/KnowledgebaseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneKnowledgebaseArgs {
  @TypeGraphQL.Field(_type => KnowledgebaseWhereUniqueInput, {
    nullable: false
  })
  where!: KnowledgebaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => KnowledgebaseCreateInput, {
    nullable: false
  })
  create!: KnowledgebaseCreateInput;

  @TypeGraphQL.Field(_type => KnowledgebaseUpdateInput, {
    nullable: false
  })
  update!: KnowledgebaseUpdateInput;
}
