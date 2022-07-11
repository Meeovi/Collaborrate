import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ApitokenWhereInput", {
  isAbstract: true
})
export class ApitokenWhereInput {
  @TypeGraphQL.Field(_type => [ApitokenWhereInput], {
    nullable: true
  })
  AND?: ApitokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApitokenWhereInput], {
    nullable: true
  })
  OR?: ApitokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApitokenWhereInput], {
    nullable: true
  })
  NOT?: ApitokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  token_type?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  token?: BigIntFilter | undefined;
}
