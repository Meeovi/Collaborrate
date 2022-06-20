import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DashboardsOrderByRelevanceFieldEnum } from "../../enums/DashboardsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DashboardsOrderByRelevanceInput", {
  isAbstract: true
})
export class DashboardsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [DashboardsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "client_id" | "client_secret" | "privacy" | "category" | "url" | "media" | "task" | "reports" | "tasks" | "projects" | "tickets" | "customers" | "checklists" | "visits" | "users" | "products" | "articles" | "sales">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
