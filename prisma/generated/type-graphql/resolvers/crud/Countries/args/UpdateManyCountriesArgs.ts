import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CountriesUpdateManyMutationInput } from "../../../inputs/CountriesUpdateManyMutationInput";
import { CountriesWhereInput } from "../../../inputs/CountriesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCountriesArgs {
  @TypeGraphQL.Field(_type => CountriesUpdateManyMutationInput, {
    nullable: false
  })
  data!: CountriesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CountriesWhereInput, {
    nullable: true
  })
  where?: CountriesWhereInput | undefined;
}
