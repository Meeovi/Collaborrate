import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_ratesWhereUniqueInput } from "../../../inputs/Currency_ratesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCurrency_ratesArgs {
  @TypeGraphQL.Field(_type => Currency_ratesWhereUniqueInput, {
    nullable: false
  })
  where!: Currency_ratesWhereUniqueInput;
}
