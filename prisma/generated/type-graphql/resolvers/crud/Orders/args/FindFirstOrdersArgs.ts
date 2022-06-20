import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrdersOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/OrdersOrderByWithRelationAndSearchRelevanceInput";
import { OrdersWhereInput } from "../../../inputs/OrdersWhereInput";
import { OrdersWhereUniqueInput } from "../../../inputs/OrdersWhereUniqueInput";
import { OrdersScalarFieldEnum } from "../../../../enums/OrdersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstOrdersArgs {
  @TypeGraphQL.Field(_type => OrdersWhereInput, {
    nullable: true
  })
  where?: OrdersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrdersOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: OrdersOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: true
  })
  cursor?: OrdersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [OrdersScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "purchase_point" | "purchase_date" | "bill_to_name" | "ship_to_name" | "grand_total_base" | "grand_total_purchased" | "status" | "action" | "allocated_sources" | "braintree_transaction_source" | "cust_id" | "prod_id"> | undefined;
}
