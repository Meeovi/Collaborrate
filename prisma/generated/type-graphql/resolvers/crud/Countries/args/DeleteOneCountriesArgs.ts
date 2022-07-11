import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CountriesWhereUniqueInput } from "../../../inputs/CountriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCountriesArgs {
  @TypeGraphQL.Field(_type => CountriesWhereUniqueInput, {
    nullable: false
  })
  where!: CountriesWhereUniqueInput;
}
