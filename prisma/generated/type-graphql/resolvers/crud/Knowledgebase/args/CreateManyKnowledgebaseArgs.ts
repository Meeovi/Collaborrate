import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { KnowledgebaseCreateManyInput } from "../../../inputs/KnowledgebaseCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyKnowledgebaseArgs {
  @TypeGraphQL.Field(_type => [KnowledgebaseCreateManyInput], {
    nullable: false
  })
  data!: KnowledgebaseCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
