import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrenciesCreateInput } from "../../../inputs/CurrenciesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCurrenciesArgs {
  @TypeGraphQL.Field(_type => CurrenciesCreateInput, {
    nullable: false
  })
  data!: CurrenciesCreateInput;
}