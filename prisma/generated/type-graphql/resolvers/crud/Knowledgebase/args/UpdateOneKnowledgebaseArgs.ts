import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { KnowledgebaseUpdateInput } from "../../../inputs/KnowledgebaseUpdateInput";
import { KnowledgebaseWhereUniqueInput } from "../../../inputs/KnowledgebaseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneKnowledgebaseArgs {
  @TypeGraphQL.Field(_type => KnowledgebaseUpdateInput, {
    nullable: false
  })
  data!: KnowledgebaseUpdateInput;

  @TypeGraphQL.Field(_type => KnowledgebaseWhereUniqueInput, {
    nullable: false
  })
  where!: KnowledgebaseWhereUniqueInput;
}
