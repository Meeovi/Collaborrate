import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportsAvgOrderByAggregateInput } from "../inputs/ReportsAvgOrderByAggregateInput";
import { ReportsCountOrderByAggregateInput } from "../inputs/ReportsCountOrderByAggregateInput";
import { ReportsMaxOrderByAggregateInput } from "../inputs/ReportsMaxOrderByAggregateInput";
import { ReportsMinOrderByAggregateInput } from "../inputs/ReportsMinOrderByAggregateInput";
import { ReportsSumOrderByAggregateInput } from "../inputs/ReportsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReportsOrderByWithAggregationInput", {
  isAbstract: true
})
export class ReportsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  products?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subtotal?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  applied_coupon?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ip_address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ReportsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ReportsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReportsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ReportsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReportsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ReportsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReportsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ReportsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReportsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ReportsSumOrderByAggregateInput | undefined;
}
