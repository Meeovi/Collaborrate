import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrdersOrderByWithAggregationInput } from "../../../inputs/OrdersOrderByWithAggregationInput";
import { OrdersScalarWhereWithAggregatesInput } from "../../../inputs/OrdersScalarWhereWithAggregatesInput";
import { OrdersWhereInput } from "../../../inputs/OrdersWhereInput";
import { OrdersScalarFieldEnum } from "../../../../enums/OrdersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrdersArgs {
  @TypeGraphQL.Field(_type => OrdersWhereInput, {
    nullable: true
  })
  where?: OrdersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrdersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: OrdersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "purchase_point" | "purchase_date" | "bill_to_name" | "ship_to_name" | "grand_total_base" | "grand_total_purchased" | "status" | "action" | "allocated_sources" | "braintree_transaction_source" | "cust_id" | "prod_id">;

  @TypeGraphQL.Field(_type => OrdersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OrdersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
