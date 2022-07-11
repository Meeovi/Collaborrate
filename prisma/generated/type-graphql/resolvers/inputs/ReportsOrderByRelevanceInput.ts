import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportsOrderByRelevanceFieldEnum } from "../../enums/ReportsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReportsOrderByRelevanceInput", {
  isAbstract: true
})
export class ReportsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ReportsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"customer" | "email" | "products" | "subtotal" | "applied_coupon" | "ip_address">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
