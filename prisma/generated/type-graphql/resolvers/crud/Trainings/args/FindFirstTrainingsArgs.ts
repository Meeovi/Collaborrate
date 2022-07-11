import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrainingsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TrainingsOrderByWithRelationAndSearchRelevanceInput";
import { TrainingsWhereInput } from "../../../inputs/TrainingsWhereInput";
import { TrainingsWhereUniqueInput } from "../../../inputs/TrainingsWhereUniqueInput";
import { TrainingsScalarFieldEnum } from "../../../../enums/TrainingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTrainingsArgs {
  @TypeGraphQL.Field(_type => TrainingsWhereInput, {
    nullable: true
  })
  where?: TrainingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TrainingsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: TrainingsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: true
  })
  cursor?: TrainingsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TrainingsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "subject" | "content" | "media" | "link" | "steps" | "updated" | "analytics" | "competency" | "course" | "grade" | "school" | "comment" | "address" | "country" | "state" | "postal" | "teacher" | "student" | "anncouncement" | "resource" | "badges" | "isPublic" | "isCompleted" | "speakers" | "fieldTrips" | "assignments" | "assignmentsDueDate" | "origanlityReport" | "products" | "faqs" | "languages" | "checklists" | "city" | "meetups" | "lab" | "digiboards"> | undefined;
}
