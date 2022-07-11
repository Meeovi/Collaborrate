import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ApitokenScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ApitokenScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ApitokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ApitokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApitokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ApitokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApitokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ApitokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  token_type?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  token?: BigIntWithAggregatesFilter | undefined;
}
