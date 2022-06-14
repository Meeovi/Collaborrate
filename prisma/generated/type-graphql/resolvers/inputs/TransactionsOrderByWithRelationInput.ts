import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_paymentOrderByWithRelationInput } from "../inputs/Customer_paymentOrderByWithRelationInput";
import { OrdersOrderByWithRelationInput } from "../inputs/OrdersOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TransactionsOrderByWithRelationInput", {
  isAbstract: true
})
export class TransactionsOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => OrdersOrderByWithRelationInput, {
    nullable: true
  })
  orders?: OrdersOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentOrderByWithRelationInput, {
    nullable: true
  })
  customer_payment?: Customer_paymentOrderByWithRelationInput | undefined;
}
