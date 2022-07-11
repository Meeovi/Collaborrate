import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateWithoutWorkspacesInput } from "../inputs/TasksCreateWithoutWorkspacesInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksCreateOrConnectWithoutWorkspacesInput", {
  isAbstract: true
})
export class TasksCreateOrConnectWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: false
  })
  where!: TasksWhereUniqueInput;

  @TypeGraphQL.Field(_type => TasksCreateWithoutWorkspacesInput, {
    nullable: false
  })
  create!: TasksCreateWithoutWorkspacesInput;
}
