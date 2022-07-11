import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JsonNullableWithAggregatesFilter } from "../inputs/JsonNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("GraphQLConfigScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class GraphQLConfigScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GraphQLConfigScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GraphQLConfigScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GraphQLConfigScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GraphQLConfigScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GraphQLConfigScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GraphQLConfigScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  objectId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => JsonNullableWithAggregatesFilter, {
    nullable: true
  })
  config?: JsonNullableWithAggregatesFilter | undefined;
}
