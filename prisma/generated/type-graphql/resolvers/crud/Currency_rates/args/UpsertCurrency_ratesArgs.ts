import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_ratesCreateInput } from "../../../inputs/Currency_ratesCreateInput";
import { Currency_ratesUpdateInput } from "../../../inputs/Currency_ratesUpdateInput";
import { Currency_ratesWhereUniqueInput } from "../../../inputs/Currency_ratesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCurrency_ratesArgs {
  @TypeGraphQL.Field(_type => Currency_ratesWhereUniqueInput, {
    nullable: false
  })
  where!: Currency_ratesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Currency_ratesCreateInput, {
    nullable: false
  })
  create!: Currency_ratesCreateInput;

  @TypeGraphQL.Field(_type => Currency_ratesUpdateInput, {
    nullable: false
  })
  update!: Currency_ratesUpdateInput;
}
