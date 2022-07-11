import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransactionsUpdateInput } from "../../../inputs/TransactionsUpdateInput";
import { TransactionsWhereUniqueInput } from "../../../inputs/TransactionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTransactionsArgs {
  @TypeGraphQL.Field(_type => TransactionsUpdateInput, {
    nullable: false
  })
  data!: TransactionsUpdateInput;

  @TypeGraphQL.Field(_type => TransactionsWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionsWhereUniqueInput;
}
