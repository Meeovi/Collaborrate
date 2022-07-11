import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CountriesCreateInput } from "../../../inputs/CountriesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCountriesArgs {
  @TypeGraphQL.Field(_type => CountriesCreateInput, {
    nullable: false
  })
  data!: CountriesCreateInput;
}
