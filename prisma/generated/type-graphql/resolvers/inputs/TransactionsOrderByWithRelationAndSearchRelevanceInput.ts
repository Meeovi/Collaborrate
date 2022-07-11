import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_paymentOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Customer_paymentOrderByWithRelationAndSearchRelevanceInput";
import { OrdersOrderByWithRelationAndSearchRelevanceInput } from "../inputs/OrdersOrderByWithRelationAndSearchRelevanceInput";
import { TransactionsOrderByRelevanceInput } from "../inputs/TransactionsOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TransactionsOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class TransactionsOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field(_type => OrdersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  orders?: OrdersOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  customer_payment?: Customer_paymentOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => TransactionsOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: TransactionsOrderByRelevanceInput | undefined;
}
