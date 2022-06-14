import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_symbolsUpdateInput } from "../../../inputs/Currency_symbolsUpdateInput";
import { Currency_symbolsWhereUniqueInput } from "../../../inputs/Currency_symbolsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCurrency_symbolsArgs {
  @TypeGraphQL.Field(_type => Currency_symbolsUpdateInput, {
    nullable: false
  })
  data!: Currency_symbolsUpdateInput;

  @TypeGraphQL.Field(_type => Currency_symbolsWhereUniqueInput, {
    nullable: false
  })
  where!: Currency_symbolsWhereUniqueInput;
}
