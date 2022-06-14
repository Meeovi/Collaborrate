import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { KnowledgebaseWhereUniqueInput } from "../../../inputs/KnowledgebaseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteKnowledgebaseArgs {
  @TypeGraphQL.Field(_type => KnowledgebaseWhereUniqueInput, {
    nullable: false
  })
  where!: KnowledgebaseWhereUniqueInput;
}
