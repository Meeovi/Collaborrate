import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeepdiveCreateInput } from "../../../inputs/DeepdiveCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDeepdiveArgs {
  @TypeGraphQL.Field(_type => DeepdiveCreateInput, {
    nullable: false
  })
  data!: DeepdiveCreateInput;
}
