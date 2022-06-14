import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionsAvgOrderByAggregateInput } from "../inputs/PermissionsAvgOrderByAggregateInput";
import { PermissionsCountOrderByAggregateInput } from "../inputs/PermissionsCountOrderByAggregateInput";
import { PermissionsMaxOrderByAggregateInput } from "../inputs/PermissionsMaxOrderByAggregateInput";
import { PermissionsMinOrderByAggregateInput } from "../inputs/PermissionsMinOrderByAggregateInput";
import { PermissionsSumOrderByAggregateInput } from "../inputs/PermissionsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PermissionsOrderByWithAggregationInput", {
  isAbstract: true
})
export class PermissionsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  create?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  read?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  delete?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  users?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PermissionsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PermissionsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PermissionsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PermissionsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PermissionsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PermissionsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PermissionsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PermissionsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PermissionsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PermissionsSumOrderByAggregateInput | undefined;
}
