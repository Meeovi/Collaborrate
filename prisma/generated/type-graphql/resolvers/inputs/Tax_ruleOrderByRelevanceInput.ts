import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { Tax_ruleOrderByRelevanceFieldEnum } from "../../enums/Tax_ruleOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("Tax_ruleOrderByRelevanceInput", {
  isAbstract: true
})
export class Tax_ruleOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Tax_ruleOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "tax_rate">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
