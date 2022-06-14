import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { BigIntNullableFilter } from "../inputs/BigIntNullableFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { MediamanagerListRelationFilter } from "../inputs/MediamanagerListRelationFilter";
import { ProductsRelationFilter } from "../inputs/ProductsRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { WorkspacesListRelationFilter } from "../inputs/WorkspacesListRelationFilter";

@TypeGraphQL.InputType("BrandsWhereInput", {
  isAbstract: true
})
export class BrandsWhereInput {
  @TypeGraphQL.Field(_type => [BrandsWhereInput], {
    nullable: true
  })
  AND?: BrandsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BrandsWhereInput], {
    nullable: true
  })
  OR?: BrandsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BrandsWhereInput], {
    nullable: true
  })
  NOT?: BrandsWhereInput[] | undefined;

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
  code?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  country?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  state?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  isPublic?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  city?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableFilter, {
    nullable: true
  })
  product?: BigIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  media?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ProductsRelationFilter, {
    nullable: true
  })
  products?: ProductsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MediamanagerListRelationFilter, {
    nullable: true
  })
  mediamanager?: MediamanagerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => WorkspacesListRelationFilter, {
    nullable: true
  })
  workspaces?: WorkspacesListRelationFilter | undefined;
}
