import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntNullableWithAggregatesFilter } from "../inputs/BigIntNullableWithAggregatesFilter";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("Customer_paymentScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class Customer_paymentScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Customer_paymentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Customer_paymentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_paymentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Customer_paymentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_paymentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Customer_paymentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  cust_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  payment_info?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  provider?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  account_no?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableWithAggregatesFilter, {
    nullable: true
  })
  expiry?: BigIntNullableWithAggregatesFilter | undefined;
}
