import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Project_templatesOrderByRelevanceFieldEnum } from "../../enums/Project_templatesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Project_templatesOrderByRelevanceInput", {
  isAbstract: true
})
export class Project_templatesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Project_templatesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "status" | "consider_working_days" | "priority" | "project_manager" | "resource" | "content">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
