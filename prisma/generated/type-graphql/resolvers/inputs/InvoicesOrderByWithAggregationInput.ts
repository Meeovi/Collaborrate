import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvoicesAvgOrderByAggregateInput } from "../inputs/InvoicesAvgOrderByAggregateInput";
import { InvoicesCountOrderByAggregateInput } from "../inputs/InvoicesCountOrderByAggregateInput";
import { InvoicesMaxOrderByAggregateInput } from "../inputs/InvoicesMaxOrderByAggregateInput";
import { InvoicesMinOrderByAggregateInput } from "../inputs/InvoicesMinOrderByAggregateInput";
import { InvoicesSumOrderByAggregateInput } from "../inputs/InvoicesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("InvoicesOrderByWithAggregationInput", {
  isAbstract: true
})
export class InvoicesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  invoice?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  invoice_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bill_to_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  billing_address?: "asc" | "desc" | undefined;

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
  shipping_address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_group?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  payment_method?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shipping_information?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subtotal?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shipping_and_handling?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => InvoicesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: InvoicesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InvoicesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: InvoicesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InvoicesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: InvoicesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InvoicesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: InvoicesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InvoicesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: InvoicesSumOrderByAggregateInput | undefined;
}
