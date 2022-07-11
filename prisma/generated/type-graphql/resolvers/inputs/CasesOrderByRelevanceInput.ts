import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasesOrderByRelevanceFieldEnum } from "../../enums/CasesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CasesOrderByRelevanceInput", {
  isAbstract: true
})
export class CasesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [CasesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"state" | "type" | "subject" | "description" | "resolution" | "priority" | "status" | "account_name" | "assigned_to">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
