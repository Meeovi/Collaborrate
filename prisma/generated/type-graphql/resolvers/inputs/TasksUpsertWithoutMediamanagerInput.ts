import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateWithoutMediamanagerInput } from "../inputs/TasksCreateWithoutMediamanagerInput";
import { TasksUpdateWithoutMediamanagerInput } from "../inputs/TasksUpdateWithoutMediamanagerInput";

@TypeGraphQL.InputType("TasksUpsertWithoutMediamanagerInput", {
  isAbstract: true
})
export class TasksUpsertWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => TasksUpdateWithoutMediamanagerInput, {
    nullable: false
  })
  update!: TasksUpdateWithoutMediamanagerInput;

  @TypeGraphQL.Field(_type => TasksCreateWithoutMediamanagerInput, {
    nullable: false
  })
  create!: TasksCreateWithoutMediamanagerInput;
}
