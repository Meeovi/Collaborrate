import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { ThemesListRelationFilter } from "../inputs/ThemesListRelationFilter";

@TypeGraphQL.InputType("WebsitesWhereInput", {
  isAbstract: true
})
export class WebsitesWhereInput {
  @TypeGraphQL.Field(_type => [WebsitesWhereInput], {
    nullable: true
  })
  AND?: WebsitesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WebsitesWhereInput], {
    nullable: true
  })
  OR?: WebsitesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WebsitesWhereInput], {
    nullable: true
  })
  NOT?: WebsitesWhereInput[] | undefined;

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
  url?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  shop?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  store?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ThemesListRelationFilter, {
    nullable: true
  })
  themes?: ThemesListRelationFilter | undefined;
}
