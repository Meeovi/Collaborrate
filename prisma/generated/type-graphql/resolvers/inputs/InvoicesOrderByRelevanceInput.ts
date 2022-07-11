import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvoicesOrderByRelevanceFieldEnum } from "../../enums/InvoicesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("InvoicesOrderByRelevanceInput", {
  isAbstract: true
})
export class InvoicesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [InvoicesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"bill_to_name" | "billing_address" | "grand_total_base" | "grand_total_purchased" | "status" | "shipping_address" | "customer_name" | "email" | "customer_group" | "payment_method" | "shipping_information" | "subtotal" | "shipping_and_handling">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
