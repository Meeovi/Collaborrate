import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("RolesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class RolesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [RolesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RolesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RolesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RolesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  role_name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  content?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
