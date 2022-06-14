import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateWithoutTasks_tasksToworkspacesInput } from "../inputs/WorkspacesCreateWithoutTasks_tasksToworkspacesInput";
import { WorkspacesUpdateWithoutTasks_tasksToworkspacesInput } from "../inputs/WorkspacesUpdateWithoutTasks_tasksToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesUpsertWithWhereUniqueWithoutTasks_tasksToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesUpsertWithWhereUniqueWithoutTasks_tasksToworkspacesInput {
  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspacesUpdateWithoutTasks_tasksToworkspacesInput, {
    nullable: false
  })
  update!: WorkspacesUpdateWithoutTasks_tasksToworkspacesInput;

  @TypeGraphQL.Field(_type => WorkspacesCreateWithoutTasks_tasksToworkspacesInput, {
    nullable: false
  })
  create!: WorkspacesCreateWithoutTasks_tasksToworkspacesInput;
}
