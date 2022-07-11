import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Join_roles__RoleCountOrderByAggregateInput } from "../inputs/Join_roles__RoleCountOrderByAggregateInput";
import { Join_roles__RoleMaxOrderByAggregateInput } from "../inputs/Join_roles__RoleMaxOrderByAggregateInput";
import { Join_roles__RoleMinOrderByAggregateInput } from "../inputs/Join_roles__RoleMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Join_roles__RoleOrderByWithAggregationInput", {
  isAbstract: true
})
export class Join_roles__RoleOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  relatedId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  owningId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Join_roles__RoleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Join_roles__RoleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Join_roles__RoleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Join_roles__RoleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Join_roles__RoleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Join_roles__RoleMinOrderByAggregateInput | undefined;
}
