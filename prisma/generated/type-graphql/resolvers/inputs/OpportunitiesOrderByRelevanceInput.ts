import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OpportunitiesOrderByRelevanceFieldEnum } from "../../enums/OpportunitiesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OpportunitiesOrderByRelevanceInput", {
  isAbstract: true
})
export class OpportunitiesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [OpportunitiesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "amount" | "sales_stage" | "currency" | "probability" | "next_step" | "description" | "assigned_to" | "lead_source" | "campaign" | "type" | "account_name" | "expected_close_date">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
