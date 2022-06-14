import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransactionsCreateInput } from "../../../inputs/TransactionsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTransactionsArgs {
  @TypeGraphQL.Field(_type => TransactionsCreateInput, {
    nullable: false
  })
  data!: TransactionsCreateInput;
}
