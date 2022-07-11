import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { BigIntNullableFilter } from "../inputs/BigIntNullableFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { ProductsRelationFilter } from "../inputs/ProductsRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { WishlistsRelationFilter } from "../inputs/WishlistsRelationFilter";

@TypeGraphQL.InputType("OccassionsWhereInput", {
  isAbstract: true
})
export class OccassionsWhereInput {
  @TypeGraphQL.Field(_type => [OccassionsWhereInput], {
    nullable: true
  })
  AND?: OccassionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsWhereInput], {
    nullable: true
  })
  OR?: OccassionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsWhereInput], {
    nullable: true
  })
  NOT?: OccassionsWhereInput[] | undefined;

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
  category?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  tags?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableFilter, {
    nullable: true
  })
  products?: BigIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableFilter, {
    nullable: true
  })
  wishlists?: BigIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ProductsRelationFilter, {
    nullable: true
  })
  products_occassionsToproducts?: ProductsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => WishlistsRelationFilter, {
    nullable: true
  })
  wishlists_occassionsTowishlists?: WishlistsRelationFilter | undefined;
}
