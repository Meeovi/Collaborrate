import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_ratesUpdateInput } from "../../../inputs/Currency_ratesUpdateInput";
import { Currency_ratesWhereUniqueInput } from "../../../inputs/Currency_ratesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCurrency_ratesArgs {
  @TypeGraphQL.Field(_type => Currency_ratesUpdateInput, {
    nullable: false
  })
  data!: Currency_ratesUpdateInput;

  @TypeGraphQL.Field(_type => Currency_ratesWhereUniqueInput, {
    nullable: false
  })
  where!: Currency_ratesWhereUniqueInput;
}
