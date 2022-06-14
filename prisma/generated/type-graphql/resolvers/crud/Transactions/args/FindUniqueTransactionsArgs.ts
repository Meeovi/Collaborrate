import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransactionsWhereUniqueInput } from "../../../inputs/TransactionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTransactionsArgs {
  @TypeGraphQL.Field(_type => TransactionsWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionsWhereUniqueInput;
}
