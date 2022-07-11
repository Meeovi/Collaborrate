import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("StocksScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class StocksScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [StocksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: StocksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StocksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: StocksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StocksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: StocksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableWithAggregatesFilter, {
    nullable: true
  })
  enabled?: BoolNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  website?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  sources?: StringNullableWithAggregatesFilter | undefined;
}
