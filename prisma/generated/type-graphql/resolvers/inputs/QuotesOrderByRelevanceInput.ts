import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesOrderByRelevanceFieldEnum } from "../../enums/QuotesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("QuotesOrderByRelevanceInput", {
  isAbstract: true
})
export class QuotesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [QuotesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "grand_total" | "categories" | "valid_until" | "quote_stage" | "customers" | "account" | "approval_issues" | "approval_status" | "assigned_to" | "billing_city" | "billing_country" | "billing_postal" | "billing_state" | "billing_street" | "contact" | "currency" | "discount" | "invoice_status" | "line_item_discount" | "line_item_group_total" | "line_item_name" | "line_item_subtotal" | "line_item_tax" | "line_item_total" | "payment_terms" | "shipping" | "shipping_city" | "shipping_country" | "shipping_postal" | "shipping_state" | "shipping_street" | "shipping_tax" | "subtotal" | "tax" | "total">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
