import { TrainingsOrderByWithAggregationInput } from "../../../inputs/TrainingsOrderByWithAggregationInput";
import { TrainingsScalarWhereWithAggregatesInput } from "../../../inputs/TrainingsScalarWhereWithAggregatesInput";
import { TrainingsWhereInput } from "../../../inputs/TrainingsWhereInput";
export declare class GroupByTrainingsArgs {
    where?: TrainingsWhereInput | undefined;
    orderBy?: TrainingsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "subject" | "content" | "media" | "link" | "steps" | "updated" | "analytics" | "competency" | "course" | "grade" | "school" | "comment" | "address" | "country" | "state" | "postal" | "teacher" | "student" | "announcement" | "resource" | "badges" | "isPublic" | "isCompleted" | "speakers" | "fieldTrips" | "assignments" | "assignmentsDueDate" | "origanalityReport" | "products" | "faqs" | "languages" | "checklists" | "city" | "meetups" | "lab" | "digiboards" | "countries" | "states" | "type">;
    having?: TrainingsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
