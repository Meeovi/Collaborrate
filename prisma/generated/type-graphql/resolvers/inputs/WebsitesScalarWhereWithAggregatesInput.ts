import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("WebsitesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class WebsitesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [WebsitesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: WebsitesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WebsitesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: WebsitesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WebsitesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: WebsitesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  url?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  shop?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  store?: StringNullableWithAggregatesFilter | undefined;
}
