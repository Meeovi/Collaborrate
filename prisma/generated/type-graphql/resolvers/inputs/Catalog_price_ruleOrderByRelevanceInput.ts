import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Catalog_price_ruleOrderByRelevanceFieldEnum } from "../../enums/Catalog_price_ruleOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Catalog_price_ruleOrderByRelevanceInput", {
  isAbstract: true
})
export class Catalog_price_ruleOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Catalog_price_ruleOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"rule" | "description" | "customer_groups" | "priority" | "status" | "website" | "actions_apply">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
