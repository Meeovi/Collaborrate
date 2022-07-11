import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("IdempotencyScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class IdempotencyScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [IdempotencyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: IdempotencyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IdempotencyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: IdempotencyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IdempotencyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: IdempotencyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  objectId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  reqId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  expire?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  rperm?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  wperm?: StringNullableListFilter | undefined;
}
