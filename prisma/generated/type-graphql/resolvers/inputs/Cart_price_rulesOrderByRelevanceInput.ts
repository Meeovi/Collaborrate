import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cart_price_rulesOrderByRelevanceFieldEnum } from "../../enums/Cart_price_rulesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Cart_price_rulesOrderByRelevanceInput", {
  isAbstract: true
})
export class Cart_price_rulesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Cart_price_rulesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"rule" | "description" | "coupon" | "uses_per_customer" | "priority" | "status" | "website" | "actions_apply">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
