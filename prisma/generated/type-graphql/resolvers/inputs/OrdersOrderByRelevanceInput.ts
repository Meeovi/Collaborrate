import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersOrderByRelevanceFieldEnum } from "../../enums/OrdersOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OrdersOrderByRelevanceInput", {
  isAbstract: true
})
export class OrdersOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [OrdersOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"bill_to_name" | "ship_to_name" | "allocated_sources" | "braintree_transaction_source">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
