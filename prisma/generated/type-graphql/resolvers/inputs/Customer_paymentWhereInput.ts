import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { BigIntNullableFilter } from "../inputs/BigIntNullableFilter";
import { CustomersRelationFilter } from "../inputs/CustomersRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TransactionsListRelationFilter } from "../inputs/TransactionsListRelationFilter";

@TypeGraphQL.InputType("Customer_paymentWhereInput", {
  isAbstract: true
})
export class Customer_paymentWhereInput {
  @TypeGraphQL.Field(_type => [Customer_paymentWhereInput], {
    nullable: true
  })
  AND?: Customer_paymentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_paymentWhereInput], {
    nullable: true
  })
  OR?: Customer_paymentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_paymentWhereInput], {
    nullable: true
  })
  NOT?: Customer_paymentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  cust_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  payment_info?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  provider?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  account_no?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableFilter, {
    nullable: true
  })
  expiry?: BigIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CustomersRelationFilter, {
    nullable: true
  })
  customers?: CustomersRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TransactionsListRelationFilter, {
    nullable: true
  })
  transactions?: TransactionsListRelationFilter | undefined;
}
