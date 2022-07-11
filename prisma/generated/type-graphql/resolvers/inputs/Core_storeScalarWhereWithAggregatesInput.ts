import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("Core_storeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class Core_storeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Core_storeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Core_storeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Core_storeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Core_storeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Core_storeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Core_storeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  key?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  value?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  type?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  environment?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  tag?: StringNullableWithAggregatesFilter | undefined;
}
