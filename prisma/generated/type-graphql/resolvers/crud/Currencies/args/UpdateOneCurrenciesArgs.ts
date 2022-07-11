import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrenciesUpdateInput } from "../../../inputs/CurrenciesUpdateInput";
import { CurrenciesWhereUniqueInput } from "../../../inputs/CurrenciesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCurrenciesArgs {
  @TypeGraphQL.Field(_type => CurrenciesUpdateInput, {
    nullable: false
  })
  data!: CurrenciesUpdateInput;

  @TypeGraphQL.Field(_type => CurrenciesWhereUniqueInput, {
    nullable: false
  })
  where!: CurrenciesWhereUniqueInput;
}
