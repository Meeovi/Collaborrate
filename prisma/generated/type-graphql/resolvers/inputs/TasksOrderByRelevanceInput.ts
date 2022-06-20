import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { TasksOrderByRelevanceFieldEnum } from "../../enums/TasksOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("TasksOrderByRelevanceInput", {
  isAbstract: true
})
export class TasksOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [TasksOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"subject" | "start_date" | "due_date" | "priority" | "description" | "status" | "related_to" | "contact" | "assigned_to">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
