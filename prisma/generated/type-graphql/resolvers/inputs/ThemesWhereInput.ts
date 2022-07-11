import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { WebsitesRelationFilter } from "../inputs/WebsitesRelationFilter";

@TypeGraphQL.InputType("ThemesWhereInput", {
  isAbstract: true
})
export class ThemesWhereInput {
  @TypeGraphQL.Field(_type => [ThemesWhereInput], {
    nullable: true
  })
  AND?: ThemesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThemesWhereInput], {
    nullable: true
  })
  OR?: ThemesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThemesWhereInput], {
    nullable: true
  })
  NOT?: ThemesWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => WebsitesRelationFilter, {
    nullable: true
  })
  websites?: WebsitesRelationFilter | undefined;
}
