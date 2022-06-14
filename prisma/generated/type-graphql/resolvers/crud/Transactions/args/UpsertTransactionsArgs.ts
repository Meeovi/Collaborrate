import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransactionsCreateInput } from "../../../inputs/TransactionsCreateInput";
import { TransactionsUpdateInput } from "../../../inputs/TransactionsUpdateInput";
import { TransactionsWhereUniqueInput } from "../../../inputs/TransactionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTransactionsArgs {
  @TypeGraphQL.Field(_type => TransactionsWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionsCreateInput, {
    nullable: false
  })
  create!: TransactionsCreateInput;

  @TypeGraphQL.Field(_type => TransactionsUpdateInput, {
    nullable: false
  })
  update!: TransactionsUpdateInput;
}
