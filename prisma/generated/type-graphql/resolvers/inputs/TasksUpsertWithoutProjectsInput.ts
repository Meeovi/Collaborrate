import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateWithoutProjectsInput } from "../inputs/TasksCreateWithoutProjectsInput";
import { TasksUpdateWithoutProjectsInput } from "../inputs/TasksUpdateWithoutProjectsInput";

@TypeGraphQL.InputType("TasksUpsertWithoutProjectsInput", {
  isAbstract: true
})
export class TasksUpsertWithoutProjectsInput {
  @TypeGraphQL.Field(_type => TasksUpdateWithoutProjectsInput, {
    nullable: false
  })
  update!: TasksUpdateWithoutProjectsInput;

  @TypeGraphQL.Field(_type => TasksCreateWithoutProjectsInput, {
    nullable: false
  })
  create!: TasksCreateWithoutProjectsInput;
}
