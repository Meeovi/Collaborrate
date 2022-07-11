import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { TrainingsOrderByRelevanceFieldEnum } from "../../enums/TrainingsOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("TrainingsOrderByRelevanceInput", {
  isAbstract: true
})
export class TrainingsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [TrainingsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "subject" | "content" | "media" | "link" | "steps" | "analytics" | "competency" | "course" | "grade" | "school" | "address" | "postal" | "teacher" | "student" | "anncouncement" | "resource" | "badges" | "isPublic" | "isCompleted" | "speakers" | "fieldTrips" | "assignments" | "assignmentsDueDate" | "origanlityReport" | "faqs" | "languages" | "city" | "meetups" | "lab" | "digiboards">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
