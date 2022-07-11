import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { CustomersRelationFilter } from "../inputs/CustomersRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Customer_groupWhereInput", {
  isAbstract: true
})
export class Customer_groupWhereInput {
  @TypeGraphQL.Field(_type => [Customer_groupWhereInput], {
    nullable: true
  })
  AND?: Customer_groupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupWhereInput], {
    nullable: true
  })
  OR?: Customer_groupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupWhereInput], {
    nullable: true
  })
  NOT?: Customer_groupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  tax_class?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  cust_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => CustomersRelationFilter, {
    nullable: true
  })
  customers?: CustomersRelationFilter | undefined;
}
