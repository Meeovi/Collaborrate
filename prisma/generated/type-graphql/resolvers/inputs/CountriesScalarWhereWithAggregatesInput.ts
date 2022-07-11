import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CountriesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CountriesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CountriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CountriesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CountriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CountriesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CountriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CountriesScalarWhereWithAggregatesInput[] | undefined;

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
  image?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  region?: StringNullableWithAggregatesFilter | undefined;
}
