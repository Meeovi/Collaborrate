import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { KnowledgebaseCreateInput } from "../../../inputs/KnowledgebaseCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneKnowledgebaseArgs {
  @TypeGraphQL.Field(_type => KnowledgebaseCreateInput, {
    nullable: false
  })
  data!: KnowledgebaseCreateInput;
}
