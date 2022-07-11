import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("GlossaryWhereInput", {
  isAbstract: true
})
export class GlossaryWhereInput {
  @TypeGraphQL.Field(_type => [GlossaryWhereInput], {
    nullable: true
  })
  AND?: GlossaryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GlossaryWhereInput], {
    nullable: true
  })
  OR?: GlossaryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GlossaryWhereInput], {
    nullable: true
  })
  NOT?: GlossaryWhereInput[] | undefined;

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
  content?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  image?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  published?: DateTimeNullableFilter | undefined;
}
