import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesUpdateWithoutTasks_tasksToworkspacesInput } from "../inputs/WorkspacesUpdateWithoutTasks_tasksToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesUpdateWithWhereUniqueWithoutTasks_tasksToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesUpdateWithWhereUniqueWithoutTasks_tasksToworkspacesInput {
  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspacesUpdateWithoutTasks_tasksToworkspacesInput, {
    nullable: false
  })
  data!: WorkspacesUpdateWithoutTasks_tasksToworkspacesInput;
}
