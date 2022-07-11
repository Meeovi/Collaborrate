import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_paymentOrderByRelevanceFieldEnum } from "../../enums/Customer_paymentOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_paymentOrderByRelevanceInput", {
  isAbstract: true
})
export class Customer_paymentOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Customer_paymentOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"payment_info" | "provider">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
