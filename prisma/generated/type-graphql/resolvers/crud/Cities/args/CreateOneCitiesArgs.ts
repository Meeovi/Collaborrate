import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CitiesCreateInput } from "../../../inputs/CitiesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCitiesArgs {
  @TypeGraphQL.Field(_type => CitiesCreateInput, {
    nullable: false
  })
  data!: CitiesCreateInput;
}
