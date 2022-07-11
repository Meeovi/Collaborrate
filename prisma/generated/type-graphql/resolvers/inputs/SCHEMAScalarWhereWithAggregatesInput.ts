import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { JsonNullableWithAggregatesFilter } from "../inputs/JsonNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SCHEMAScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SCHEMAScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SCHEMAScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SCHEMAScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SCHEMAScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SCHEMAScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SCHEMAScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SCHEMAScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  className?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => JsonNullableWithAggregatesFilter, {
    nullable: true
  })
  schema?: JsonNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableWithAggregatesFilter, {
    nullable: true
  })
  isParseClass?: BoolNullableWithAggregatesFilter | undefined;
}
