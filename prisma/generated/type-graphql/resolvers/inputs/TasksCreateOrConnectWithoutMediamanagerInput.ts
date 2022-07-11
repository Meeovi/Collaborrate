import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateWithoutMediamanagerInput } from "../inputs/TasksCreateWithoutMediamanagerInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksCreateOrConnectWithoutMediamanagerInput", {
  isAbstract: true
})
export class TasksCreateOrConnectWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: false
  })
  where!: TasksWhereUniqueInput;

  @TypeGraphQL.Field(_type => TasksCreateWithoutMediamanagerInput, {
    nullable: false
  })
  create!: TasksCreateWithoutMediamanagerInput;
}
