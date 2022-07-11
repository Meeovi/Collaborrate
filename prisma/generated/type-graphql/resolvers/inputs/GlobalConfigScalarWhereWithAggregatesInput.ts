import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JsonNullableWithAggregatesFilter } from "../inputs/JsonNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("GlobalConfigScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class GlobalConfigScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GlobalConfigScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GlobalConfigScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GlobalConfigScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GlobalConfigScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GlobalConfigScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GlobalConfigScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  objectId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => JsonNullableWithAggregatesFilter, {
    nullable: true
  })
  params?: JsonNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => JsonNullableWithAggregatesFilter, {
    nullable: true
  })
  masterKeyOnly?: JsonNullableWithAggregatesFilter | undefined;
}
