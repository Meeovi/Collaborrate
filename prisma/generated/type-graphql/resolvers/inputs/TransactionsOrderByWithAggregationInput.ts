import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionsAvgOrderByAggregateInput } from "../inputs/TransactionsAvgOrderByAggregateInput";
import { TransactionsCountOrderByAggregateInput } from "../inputs/TransactionsCountOrderByAggregateInput";
import { TransactionsMaxOrderByAggregateInput } from "../inputs/TransactionsMaxOrderByAggregateInput";
import { TransactionsMinOrderByAggregateInput } from "../inputs/TransactionsMinOrderByAggregateInput";
import { TransactionsSumOrderByAggregateInput } from "../inputs/TransactionsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TransactionsOrderByWithAggregationInput", {
  isAbstract: true
})
export class TransactionsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  transaction_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  parent_transaction_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  payment_method?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  closed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TransactionsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TransactionsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TransactionsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TransactionsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TransactionsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TransactionsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TransactionsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TransactionsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TransactionsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TransactionsSumOrderByAggregateInput | undefined;
}
