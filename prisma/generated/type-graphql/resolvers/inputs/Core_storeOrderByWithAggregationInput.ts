import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Core_storeAvgOrderByAggregateInput } from "../inputs/Core_storeAvgOrderByAggregateInput";
import { Core_storeCountOrderByAggregateInput } from "../inputs/Core_storeCountOrderByAggregateInput";
import { Core_storeMaxOrderByAggregateInput } from "../inputs/Core_storeMaxOrderByAggregateInput";
import { Core_storeMinOrderByAggregateInput } from "../inputs/Core_storeMinOrderByAggregateInput";
import { Core_storeSumOrderByAggregateInput } from "../inputs/Core_storeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Core_storeOrderByWithAggregationInput", {
  isAbstract: true
})
export class Core_storeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  key?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  environment?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tag?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Core_storeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Core_storeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Core_storeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Core_storeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Core_storeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Core_storeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Core_storeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Core_storeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Core_storeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Core_storeSumOrderByAggregateInput | undefined;
}
