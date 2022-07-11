import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { KnowledgebaseUpdateManyMutationInput } from "../../../inputs/KnowledgebaseUpdateManyMutationInput";
import { KnowledgebaseWhereInput } from "../../../inputs/KnowledgebaseWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyKnowledgebaseArgs {
  @TypeGraphQL.Field(_type => KnowledgebaseUpdateManyMutationInput, {
    nullable: false
  })
  data!: KnowledgebaseUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => KnowledgebaseWhereInput, {
    nullable: true
  })
  where?: KnowledgebaseWhereInput | undefined;
}
