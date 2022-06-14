import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupAvgOrderByAggregateInput } from "../inputs/Customer_groupAvgOrderByAggregateInput";
import { Customer_groupCountOrderByAggregateInput } from "../inputs/Customer_groupCountOrderByAggregateInput";
import { Customer_groupMaxOrderByAggregateInput } from "../inputs/Customer_groupMaxOrderByAggregateInput";
import { Customer_groupMinOrderByAggregateInput } from "../inputs/Customer_groupMinOrderByAggregateInput";
import { Customer_groupSumOrderByAggregateInput } from "../inputs/Customer_groupSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_groupOrderByWithAggregationInput", {
  isAbstract: true
})
export class Customer_groupOrderByWithAggregationInput {
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
  tax_class?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cust_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Customer_groupCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Customer_groupCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Customer_groupAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Customer_groupMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Customer_groupMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Customer_groupSumOrderByAggregateInput | undefined;
}
