import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChecklistOrderByRelevanceFieldEnum } from "../../enums/ChecklistOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ChecklistOrderByRelevanceInput", {
  isAbstract: true
})
export class ChecklistOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ChecklistOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"username" | "location" | "regional_manager" | "manager" | "description" | "ticket" | "project" | "region" | "country" | "media" | "prod_id">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
