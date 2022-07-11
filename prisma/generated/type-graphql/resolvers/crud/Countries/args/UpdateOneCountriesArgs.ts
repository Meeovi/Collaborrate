import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CountriesUpdateInput } from "../../../inputs/CountriesUpdateInput";
import { CountriesWhereUniqueInput } from "../../../inputs/CountriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCountriesArgs {
  @TypeGraphQL.Field(_type => CountriesUpdateInput, {
    nullable: false
  })
  data!: CountriesUpdateInput;

  @TypeGraphQL.Field(_type => CountriesWhereUniqueInput, {
    nullable: false
  })
  where!: CountriesWhereUniqueInput;
}
