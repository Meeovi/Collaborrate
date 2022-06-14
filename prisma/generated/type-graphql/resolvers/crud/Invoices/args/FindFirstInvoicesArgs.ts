import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvoicesOrderByWithRelationInput } from "../../../inputs/InvoicesOrderByWithRelationInput";
import { InvoicesWhereInput } from "../../../inputs/InvoicesWhereInput";
import { InvoicesWhereUniqueInput } from "../../../inputs/InvoicesWhereUniqueInput";
import { InvoicesScalarFieldEnum } from "../../../../enums/InvoicesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstInvoicesArgs {
  @TypeGraphQL.Field(_type => InvoicesWhereInput, {
    nullable: true
  })
  where?: InvoicesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InvoicesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: InvoicesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => InvoicesWhereUniqueInput, {
    nullable: true
  })
  cursor?: InvoicesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [InvoicesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"invoice" | "order_number" | "invoice_date" | "bill_to_name" | "billing_address" | "grand_total_base" | "grand_total_purchased" | "status" | "shipping_address" | "customer_name" | "email" | "customer_group" | "payment_method" | "shipping_information" | "subtotal" | "shipping_and_handling" | "id"> | undefined;
}
