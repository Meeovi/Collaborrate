import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CountriesWhereInput } from "../../../inputs/CountriesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCountriesArgs {
  @TypeGraphQL.Field(_type => CountriesWhereInput, {
    nullable: true
  })
  where?: CountriesWhereInput | undefined;
}
