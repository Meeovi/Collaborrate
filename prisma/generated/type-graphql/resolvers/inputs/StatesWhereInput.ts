import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("StatesWhereInput", {
  isAbstract: true
})
export class StatesWhereInput {
  @TypeGraphQL.Field(_type => [StatesWhereInput], {
    nullable: true
  })
  AND?: StatesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StatesWhereInput], {
    nullable: true
  })
  OR?: StatesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StatesWhereInput], {
    nullable: true
  })
  NOT?: StatesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  country?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  image?: StringNullableFilter | undefined;
}
