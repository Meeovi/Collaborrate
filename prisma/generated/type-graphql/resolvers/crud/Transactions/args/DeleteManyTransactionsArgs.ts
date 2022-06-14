import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransactionsWhereInput } from "../../../inputs/TransactionsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTransactionsArgs {
  @TypeGraphQL.Field(_type => TransactionsWhereInput, {
    nullable: true
  })
  where?: TransactionsWhereInput | undefined;
}
