import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateNestedOneWithoutQuotesInput } from "../inputs/CustomersCreateNestedOneWithoutQuotesInput";
import { OrdersCreateNestedOneWithoutQuotesInput } from "../inputs/OrdersCreateNestedOneWithoutQuotesInput";
import { ProductsCreateNestedOneWithoutQuotesInput } from "../inputs/ProductsCreateNestedOneWithoutQuotesInput";

@TypeGraphQL.InputType("QuotesCreateInput", {
  isAbstract: true
})
export class QuotesCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  grand_total?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  categories?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  valid_until?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  quote_stage?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customers?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  account?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  approval_issues?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  approval_status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assigned_to?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billing_city?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billing_country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billing_postal?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billing_state?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billing_street?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contact?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  discount?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  invoice_status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  line_item_discount?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  line_item_group_total?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  line_item_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  line_item_subtotal?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  line_item_tax?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  line_item_total?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payment_terms?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_city?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_postal?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_state?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_street?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_tax?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subtotal?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  total?: string | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutQuotesInput, {
    nullable: true
  })
  customers_customersToquotes?: CustomersCreateNestedOneWithoutQuotesInput | undefined;

  @TypeGraphQL.Field(_type => OrdersCreateNestedOneWithoutQuotesInput, {
    nullable: true
  })
  orders?: OrdersCreateNestedOneWithoutQuotesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutQuotesInput, {
    nullable: true
  })
  products_productsToquotes?: ProductsCreateNestedOneWithoutQuotesInput | undefined;
}
