import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("GlossaryScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class GlossaryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GlossaryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GlossaryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GlossaryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GlossaryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GlossaryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GlossaryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  content?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  image?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  published?: DateTimeNullableWithAggregatesFilter | undefined;
}
