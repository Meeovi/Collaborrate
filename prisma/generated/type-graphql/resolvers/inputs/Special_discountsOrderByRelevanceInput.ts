import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { Special_discountsOrderByRelevanceFieldEnum } from "../../enums/Special_discountsOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("Special_discountsOrderByRelevanceInput", {
  isAbstract: true
})
export class Special_discountsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Special_discountsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "excerpt" | "image" | "rewards" | "coupons" | "categories" | "articles" | "products" | "customers" | "users">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
