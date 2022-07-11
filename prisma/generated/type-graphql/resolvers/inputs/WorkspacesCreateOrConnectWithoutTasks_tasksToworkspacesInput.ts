import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateWithoutTasks_tasksToworkspacesInput } from "../inputs/WorkspacesCreateWithoutTasks_tasksToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesCreateOrConnectWithoutTasks_tasksToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesCreateOrConnectWithoutTasks_tasksToworkspacesInput {
  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspacesCreateWithoutTasks_tasksToworkspacesInput, {
    nullable: false
  })
  create!: WorkspacesCreateWithoutTasks_tasksToworkspacesInput;
}
