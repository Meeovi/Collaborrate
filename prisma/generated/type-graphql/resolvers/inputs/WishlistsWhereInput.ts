import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { OccassionsListRelationFilter } from "../inputs/OccassionsListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("WishlistsWhereInput", {
  isAbstract: true
})
export class WishlistsWhereInput {
  @TypeGraphQL.Field(_type => [WishlistsWhereInput], {
    nullable: true
  })
  AND?: WishlistsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WishlistsWhereInput], {
    nullable: true
  })
  OR?: WishlistsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WishlistsWhereInput], {
    nullable: true
  })
  NOT?: WishlistsWhereInput[] | undefined;

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
  customers?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  visibility?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  products?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  quantity?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => OccassionsListRelationFilter, {
    nullable: true
  })
  occassions?: OccassionsListRelationFilter | undefined;
}
