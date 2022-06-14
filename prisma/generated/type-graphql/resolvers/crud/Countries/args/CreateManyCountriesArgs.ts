import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CountriesCreateManyInput } from "../../../inputs/CountriesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCountriesArgs {
  @TypeGraphQL.Field(_type => [CountriesCreateManyInput], {
    nullable: false
  })
  data!: CountriesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
