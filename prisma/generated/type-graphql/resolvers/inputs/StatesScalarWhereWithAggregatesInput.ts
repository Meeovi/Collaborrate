import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("StatesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class StatesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [StatesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: StatesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StatesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: StatesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StatesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: StatesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  country?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  image?: StringNullableWithAggregatesFilter | undefined;
}
