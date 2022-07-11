import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { TicketingOrderByRelevanceFieldEnum } from "../../enums/TicketingOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("TicketingOrderByRelevanceInput", {
  isAbstract: true
})
export class TicketingOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [TicketingOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "location" | "date" | "severity" | "team" | "requester" | "requester_email" | "content" | "department" | "media" | "projects" | "ticket_type" | "comment" | "products" | "priority" | "status" | "resolution" | "assigned_to" | "account_name" | "level">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
