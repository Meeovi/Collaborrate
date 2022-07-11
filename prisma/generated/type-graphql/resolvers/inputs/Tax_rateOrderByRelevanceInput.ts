import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { Tax_rateOrderByRelevanceFieldEnum } from "../../enums/Tax_rateOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("Tax_rateOrderByRelevanceInput", {
  isAbstract: true
})
export class Tax_rateOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Tax_rateOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"tax_identifier" | "postcode" | "state" | "country" | "rate_percent" | "default_store_view">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
