import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrenciesWhereUniqueInput } from "../../../inputs/CurrenciesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCurrenciesArgs {
  @TypeGraphQL.Field(_type => CurrenciesWhereUniqueInput, {
    nullable: false
  })
  where!: CurrenciesWhereUniqueInput;
}
