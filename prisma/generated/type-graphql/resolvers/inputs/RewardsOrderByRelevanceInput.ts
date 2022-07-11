import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RewardsOrderByRelevanceFieldEnum } from "../../enums/RewardsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RewardsOrderByRelevanceInput", {
  isAbstract: true
})
export class RewardsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [RewardsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "slug" | "level" | "coupons" | "categories" | "articles" | "products" | "customers" | "users">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
