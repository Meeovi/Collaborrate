import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvoicesOrderByWithAggregationInput } from "../../../inputs/InvoicesOrderByWithAggregationInput";
import { InvoicesScalarWhereWithAggregatesInput } from "../../../inputs/InvoicesScalarWhereWithAggregatesInput";
import { InvoicesWhereInput } from "../../../inputs/InvoicesWhereInput";
import { InvoicesScalarFieldEnum } from "../../../../enums/InvoicesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByInvoicesArgs {
  @TypeGraphQL.Field(_type => InvoicesWhereInput, {
    nullable: true
  })
  where?: InvoicesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InvoicesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: InvoicesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvoicesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"invoice" | "order_number" | "invoice_date" | "bill_to_name" | "billing_address" | "grand_total_base" | "grand_total_purchased" | "status" | "shipping_address" | "customer_name" | "email" | "customer_group" | "payment_method" | "shipping_information" | "subtotal" | "shipping_and_handling" | "id">;

  @TypeGraphQL.Field(_type => InvoicesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: InvoicesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
