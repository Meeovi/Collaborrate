import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { StatisticsOrderByRelevanceFieldEnum } from "../../enums/StatisticsOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("StatisticsOrderByRelevanceInput", {
  isAbstract: true
})
export class StatisticsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [StatisticsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "excerpt" | "description" | "image" | "special_offers" | "reports" | "rewards" | "coupons" | "categories" | "articles" | "products" | "customers" | "users">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
