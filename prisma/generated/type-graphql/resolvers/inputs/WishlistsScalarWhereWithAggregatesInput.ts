import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("WishlistsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class WishlistsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [WishlistsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: WishlistsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WishlistsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: WishlistsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WishlistsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: WishlistsScalarWhereWithAggregatesInput[] | undefined;

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
  customers?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  visibility?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  products?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  quantity?: StringNullableWithAggregatesFilter | undefined;
}
