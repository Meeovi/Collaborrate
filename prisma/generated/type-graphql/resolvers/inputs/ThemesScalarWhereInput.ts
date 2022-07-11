import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ThemesScalarWhereInput", {
  isAbstract: true
})
export class ThemesScalarWhereInput {
  @TypeGraphQL.Field(_type => [ThemesScalarWhereInput], {
    nullable: true
  })
  AND?: ThemesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThemesScalarWhereInput], {
    nullable: true
  })
  OR?: ThemesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThemesScalarWhereInput], {
    nullable: true
  })
  NOT?: ThemesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  parent_theme?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  theme_path?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  action?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  website_id?: BigIntFilter | undefined;
}
