import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Join_users__RoleCountOrderByAggregateInput } from "../inputs/Join_users__RoleCountOrderByAggregateInput";
import { Join_users__RoleMaxOrderByAggregateInput } from "../inputs/Join_users__RoleMaxOrderByAggregateInput";
import { Join_users__RoleMinOrderByAggregateInput } from "../inputs/Join_users__RoleMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Join_users__RoleOrderByWithAggregationInput", {
  isAbstract: true
})
export class Join_users__RoleOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  relatedId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  owningId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Join_users__RoleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Join_users__RoleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Join_users__RoleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Join_users__RoleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Join_users__RoleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Join_users__RoleMinOrderByAggregateInput | undefined;
}
