import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesAvgOrderByAggregateInput } from "../inputs/RolesAvgOrderByAggregateInput";
import { RolesCountOrderByAggregateInput } from "../inputs/RolesCountOrderByAggregateInput";
import { RolesMaxOrderByAggregateInput } from "../inputs/RolesMaxOrderByAggregateInput";
import { RolesMinOrderByAggregateInput } from "../inputs/RolesMinOrderByAggregateInput";
import { RolesSumOrderByAggregateInput } from "../inputs/RolesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RolesOrderByWithAggregationInput", {
  isAbstract: true
})
export class RolesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  role_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RolesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RolesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RolesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: RolesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RolesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RolesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RolesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RolesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RolesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: RolesSumOrderByAggregateInput | undefined;
}
