import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrenciesCreateInput } from "../../../inputs/CurrenciesCreateInput";
import { CurrenciesUpdateInput } from "../../../inputs/CurrenciesUpdateInput";
import { CurrenciesWhereUniqueInput } from "../../../inputs/CurrenciesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCurrenciesArgs {
  @TypeGraphQL.Field(_type => CurrenciesWhereUniqueInput, {
    nullable: false
  })
  where!: CurrenciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CurrenciesCreateInput, {
    nullable: false
  })
  create!: CurrenciesCreateInput;

  @TypeGraphQL.Field(_type => CurrenciesUpdateInput, {
    nullable: false
  })
  update!: CurrenciesUpdateInput;
}
