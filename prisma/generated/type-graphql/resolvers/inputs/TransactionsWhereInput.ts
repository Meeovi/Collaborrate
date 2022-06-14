import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { Customer_paymentRelationFilter } from "../inputs/Customer_paymentRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OrdersRelationFilter } from "../inputs/OrdersRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("TransactionsWhereInput", {
  isAbstract: true
})
export class TransactionsWhereInput {
  @TypeGraphQL.Field(_type => [TransactionsWhereInput], {
    nullable: true
  })
  AND?: TransactionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionsWhereInput], {
    nullable: true
  })
  OR?: TransactionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionsWhereInput], {
    nullable: true
  })
  NOT?: TransactionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  order_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  transaction_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  parent_transaction_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  created?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  payment_method?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  closed?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => OrdersRelationFilter, {
    nullable: true
  })
  orders?: OrdersRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentRelationFilter, {
    nullable: true
  })
  customer_payment?: Customer_paymentRelationFilter | undefined;
}
