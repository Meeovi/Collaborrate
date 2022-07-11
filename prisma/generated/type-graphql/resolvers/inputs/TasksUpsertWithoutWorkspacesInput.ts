import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateWithoutWorkspacesInput } from "../inputs/TasksCreateWithoutWorkspacesInput";
import { TasksUpdateWithoutWorkspacesInput } from "../inputs/TasksUpdateWithoutWorkspacesInput";

@TypeGraphQL.InputType("TasksUpsertWithoutWorkspacesInput", {
  isAbstract: true
})
export class TasksUpsertWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => TasksUpdateWithoutWorkspacesInput, {
    nullable: false
  })
  update!: TasksUpdateWithoutWorkspacesInput;

  @TypeGraphQL.Field(_type => TasksCreateWithoutWorkspacesInput, {
    nullable: false
  })
  create!: TasksCreateWithoutWorkspacesInput;
}
