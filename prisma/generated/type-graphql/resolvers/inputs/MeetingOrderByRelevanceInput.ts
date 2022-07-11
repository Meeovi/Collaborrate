import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MeetingOrderByRelevanceFieldEnum } from "../../enums/MeetingOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MeetingOrderByRelevanceInput", {
  isAbstract: true
})
export class MeetingOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [MeetingOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"subject" | "start_date" | "end_date" | "duration" | "status" | "related_to" | "reminders" | "content" | "assigned_to" | "invitees" | "scheduling">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
