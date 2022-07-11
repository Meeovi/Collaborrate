import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransactionsOrderByWithAggregationInput } from "../../../inputs/TransactionsOrderByWithAggregationInput";
import { TransactionsScalarWhereWithAggregatesInput } from "../../../inputs/TransactionsScalarWhereWithAggregatesInput";
import { TransactionsWhereInput } from "../../../inputs/TransactionsWhereInput";
import { TransactionsScalarFieldEnum } from "../../../../enums/TransactionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTransactionsArgs {
  @TypeGraphQL.Field(_type => TransactionsWhereInput, {
    nullable: true
  })
  where?: TransactionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TransactionsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TransactionsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "order_id" | "transaction_id" | "parent_transaction_id" | "created" | "payment_method" | "closed">;

  @TypeGraphQL.Field(_type => TransactionsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TransactionsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
