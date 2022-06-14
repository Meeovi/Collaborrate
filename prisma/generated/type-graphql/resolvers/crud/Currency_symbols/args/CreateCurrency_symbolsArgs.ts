import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_symbolsCreateInput } from "../../../inputs/Currency_symbolsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCurrency_symbolsArgs {
  @TypeGraphQL.Field(_type => Currency_symbolsCreateInput, {
    nullable: false
  })
  data!: Currency_symbolsCreateInput;
}
