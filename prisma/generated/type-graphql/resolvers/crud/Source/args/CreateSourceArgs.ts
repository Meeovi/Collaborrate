import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SourceCreateInput } from "../../../inputs/SourceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSourceArgs {
  @TypeGraphQL.Field(_type => SourceCreateInput, {
    nullable: false
  })
  data!: SourceCreateInput;
}
