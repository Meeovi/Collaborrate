import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("Url_rewritesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class Url_rewritesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Url_rewritesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Url_rewritesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Url_rewritesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Url_rewritesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Url_rewritesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Url_rewritesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  request_path?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableWithAggregatesFilter, {
    nullable: true
  })
  redirect_type?: BoolNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  target_path?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  store?: StringNullableWithAggregatesFilter | undefined;
}
