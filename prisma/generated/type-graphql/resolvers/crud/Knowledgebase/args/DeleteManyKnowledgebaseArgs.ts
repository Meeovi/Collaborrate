import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { KnowledgebaseWhereInput } from "../../../inputs/KnowledgebaseWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyKnowledgebaseArgs {
  @TypeGraphQL.Field(_type => KnowledgebaseWhereInput, {
    nullable: true
  })
  where?: KnowledgebaseWhereInput | undefined;
}
