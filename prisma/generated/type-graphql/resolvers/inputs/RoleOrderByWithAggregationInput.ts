import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCountOrderByAggregateInput } from "../inputs/RoleCountOrderByAggregateInput";
import { RoleMaxOrderByAggregateInput } from "../inputs/RoleMaxOrderByAggregateInput";
import { RoleMinOrderByAggregateInput } from "../inputs/RoleMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RoleOrderByWithAggregationInput", {
  isAbstract: true
})
export class RoleOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  objectId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rperm?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  wperm?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RoleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RoleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RoleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RoleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RoleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RoleMinOrderByAggregateInput | undefined;
}
