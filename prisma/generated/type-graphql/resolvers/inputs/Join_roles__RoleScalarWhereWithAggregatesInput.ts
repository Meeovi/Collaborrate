import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Join_roles__RoleScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class Join_roles__RoleScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Join_roles__RoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Join_roles__RoleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Join_roles__RoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Join_roles__RoleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Join_roles__RoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Join_roles__RoleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  relatedId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  owningId?: StringWithAggregatesFilter | undefined;
}
