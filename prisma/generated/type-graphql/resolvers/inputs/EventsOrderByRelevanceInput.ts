import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventsOrderByRelevanceFieldEnum } from "../../enums/EventsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EventsOrderByRelevanceInput", {
  isAbstract: true
})
export class EventsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [EventsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "content" | "tickets" | "image" | "start" | "end" | "category" | "city" | "state" | "country" | "postalcode">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
