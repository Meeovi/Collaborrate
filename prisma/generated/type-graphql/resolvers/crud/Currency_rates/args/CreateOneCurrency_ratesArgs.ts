import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_ratesCreateInput } from "../../../inputs/Currency_ratesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCurrency_ratesArgs {
  @TypeGraphQL.Field(_type => Currency_ratesCreateInput, {
    nullable: false
  })
  data!: Currency_ratesCreateInput;
}
