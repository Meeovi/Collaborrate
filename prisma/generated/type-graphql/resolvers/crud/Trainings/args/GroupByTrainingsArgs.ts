import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrainingsOrderByWithAggregationInput } from "../../../inputs/TrainingsOrderByWithAggregationInput";
import { TrainingsScalarWhereWithAggregatesInput } from "../../../inputs/TrainingsScalarWhereWithAggregatesInput";
import { TrainingsWhereInput } from "../../../inputs/TrainingsWhereInput";
import { TrainingsScalarFieldEnum } from "../../../../enums/TrainingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTrainingsArgs {
  @TypeGraphQL.Field(_type => TrainingsWhereInput, {
    nullable: true
  })
  where?: TrainingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TrainingsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TrainingsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "subject" | "content" | "media" | "link" | "steps" | "updated" | "analytics" | "competency" | "course" | "grade" | "school" | "comment" | "address" | "country" | "state" | "postal" | "teacher" | "student" | "anncouncement" | "resource" | "badges" | "isPublic" | "isCompleted" | "speakers" | "fieldTrips" | "assignments" | "assignmentsDueDate" | "origanlityReport" | "products" | "faqs" | "languages" | "checklists" | "city" | "meetups" | "lab" | "digiboards">;

  @TypeGraphQL.Field(_type => TrainingsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TrainingsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
