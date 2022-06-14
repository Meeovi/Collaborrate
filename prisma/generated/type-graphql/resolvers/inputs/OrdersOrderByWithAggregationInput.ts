import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersAvgOrderByAggregateInput } from "../inputs/OrdersAvgOrderByAggregateInput";
import { OrdersCountOrderByAggregateInput } from "../inputs/OrdersCountOrderByAggregateInput";
import { OrdersMaxOrderByAggregateInput } from "../inputs/OrdersMaxOrderByAggregateInput";
import { OrdersMinOrderByAggregateInput } from "../inputs/OrdersMinOrderByAggregateInput";
import { OrdersSumOrderByAggregateInput } from "../inputs/OrdersSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OrdersOrderByWithAggregationInput", {
  isAbstract: true
})
export class OrdersOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  purchase_point?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  purchase_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bill_to_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ship_to_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  grand_total_base?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  grand_total_purchased?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  action?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  allocated_sources?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  braintree_transaction_source?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cust_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  prod_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OrdersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OrdersCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrdersAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: OrdersAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrdersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OrdersMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrdersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OrdersMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrdersSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: OrdersSumOrderByAggregateInput | undefined;
}
