import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("ThemesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ThemesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ThemesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ThemesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThemesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ThemesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThemesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ThemesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  title?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  parent_theme?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  theme_path?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  action?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  website_id?: BigIntWithAggregatesFilter | undefined;
}
