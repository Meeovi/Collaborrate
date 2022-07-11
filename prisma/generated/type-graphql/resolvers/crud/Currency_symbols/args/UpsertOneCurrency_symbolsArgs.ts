import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_symbolsCreateInput } from "../../../inputs/Currency_symbolsCreateInput";
import { Currency_symbolsUpdateInput } from "../../../inputs/Currency_symbolsUpdateInput";
import { Currency_symbolsWhereUniqueInput } from "../../../inputs/Currency_symbolsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCurrency_symbolsArgs {
  @TypeGraphQL.Field(_type => Currency_symbolsWhereUniqueInput, {
    nullable: false
  })
  where!: Currency_symbolsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Currency_symbolsCreateInput, {
    nullable: false
  })
  create!: Currency_symbolsCreateInput;

  @TypeGraphQL.Field(_type => Currency_symbolsUpdateInput, {
    nullable: false
  })
  update!: Currency_symbolsUpdateInput;
}
