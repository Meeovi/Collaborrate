import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationsOrderByRelevanceFieldEnum } from "../../enums/InvitationsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("InvitationsOrderByRelevanceInput", {
  isAbstract: true
})
export class InvitationsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [InvitationsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"email" | "billingAddress" | "shippingAddress" | "orderNumber" | "grandTotalPurchased" | "paymentMethod" | "status" | "media" | "content">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
