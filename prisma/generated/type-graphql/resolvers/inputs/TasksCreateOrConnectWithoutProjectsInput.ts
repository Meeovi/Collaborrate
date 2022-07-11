import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateWithoutProjectsInput } from "../inputs/TasksCreateWithoutProjectsInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksCreateOrConnectWithoutProjectsInput", {
  isAbstract: true
})
export class TasksCreateOrConnectWithoutProjectsInput {
  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: false
  })
  where!: TasksWhereUniqueInput;

  @TypeGraphQL.Field(_type => TasksCreateWithoutProjectsInput, {
    nullable: false
  })
  create!: TasksCreateWithoutProjectsInput;
}
