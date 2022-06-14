import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersOrderByWithRelationInput } from "../inputs/CustomersOrderByWithRelationInput";
import { ProductsOrderByWithRelationInput } from "../inputs/ProductsOrderByWithRelationInput";
import { QuotesOrderByRelationAggregateInput } from "../inputs/QuotesOrderByRelationAggregateInput";
import { TransactionsOrderByRelationAggregateInput } from "../inputs/TransactionsOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OrdersOrderByWithRelationInput", {
  isAbstract: true
})
export class OrdersOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => CustomersOrderByWithRelationInput, {
    nullable: true
  })
  customers?: CustomersOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ProductsOrderByWithRelationInput, {
    nullable: true
  })
  products?: ProductsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => QuotesOrderByRelationAggregateInput, {
    nullable: true
  })
  quotes?: QuotesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TransactionsOrderByRelationAggregateInput, {
    nullable: true
  })
  transactions?: TransactionsOrderByRelationAggregateInput | undefined;
}
