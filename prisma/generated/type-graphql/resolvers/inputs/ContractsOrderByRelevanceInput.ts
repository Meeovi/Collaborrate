import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContractsOrderByRelevanceFieldEnum } from "../../enums/ContractsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ContractsOrderByRelevanceInput", {
  isAbstract: true
})
export class ContractsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ContractsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"contract_title" | "contract_value" | "start_date" | "end_date" | "renewal_reminder" | "customer_signed_date" | "company_signed_date" | "status" | "contract_manager" | "account" | "contact" | "description" | "opportunity" | "contract_type" | "currency" | "line_items" | "total" | "discount" | "subtotal" | "shipping" | "shipping_tax" | "tax" | "grand_total">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
