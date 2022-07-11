import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CountriesCreateInput } from "../../../inputs/CountriesCreateInput";
import { CountriesUpdateInput } from "../../../inputs/CountriesUpdateInput";
import { CountriesWhereUniqueInput } from "../../../inputs/CountriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCountriesArgs {
  @TypeGraphQL.Field(_type => CountriesWhereUniqueInput, {
    nullable: false
  })
  where!: CountriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CountriesCreateInput, {
    nullable: false
  })
  create!: CountriesCreateInput;

  @TypeGraphQL.Field(_type => CountriesUpdateInput, {
    nullable: false
  })
  update!: CountriesUpdateInput;
}
