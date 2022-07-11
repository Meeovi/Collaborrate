import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ReturnsScalarWhereInput", {
  isAbstract: true
})
export class ReturnsScalarWhereInput {
  @TypeGraphQL.Field(_type => [ReturnsScalarWhereInput], {
    nullable: true
  })
  AND?: ReturnsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsScalarWhereInput], {
    nullable: true
  })
  OR?: ReturnsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsScalarWhereInput], {
    nullable: true
  })
  NOT?: ReturnsScalarWhereInput[] | undefined;

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
  validity?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  return_prefix?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  prod_id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  cust_id?: IntFilter | undefined;
}
