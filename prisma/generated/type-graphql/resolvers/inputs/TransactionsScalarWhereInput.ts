import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("TransactionsScalarWhereInput", {
  isAbstract: true
})
export class TransactionsScalarWhereInput {
  @TypeGraphQL.Field(_type => [TransactionsScalarWhereInput], {
    nullable: true
  })
  AND?: TransactionsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionsScalarWhereInput], {
    nullable: true
  })
  OR?: TransactionsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionsScalarWhereInput], {
    nullable: true
  })
  NOT?: TransactionsScalarWhereInput[] | undefined;

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
}
