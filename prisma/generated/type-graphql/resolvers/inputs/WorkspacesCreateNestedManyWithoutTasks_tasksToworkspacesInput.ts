import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyTasks_tasksToworkspacesInputEnvelope } from "../inputs/WorkspacesCreateManyTasks_tasksToworkspacesInputEnvelope";
import { WorkspacesCreateOrConnectWithoutTasks_tasksToworkspacesInput } from "../inputs/WorkspacesCreateOrConnectWithoutTasks_tasksToworkspacesInput";
import { WorkspacesCreateWithoutTasks_tasksToworkspacesInput } from "../inputs/WorkspacesCreateWithoutTasks_tasksToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesCreateNestedManyWithoutTasks_tasksToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesCreateNestedManyWithoutTasks_tasksToworkspacesInput {
  @TypeGraphQL.Field(_type => [WorkspacesCreateWithoutTasks_tasksToworkspacesInput], {
    nullable: true
  })
  create?: WorkspacesCreateWithoutTasks_tasksToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesCreateOrConnectWithoutTasks_tasksToworkspacesInput], {
    nullable: true
  })
  connectOrCreate?: WorkspacesCreateOrConnectWithoutTasks_tasksToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateManyTasks_tasksToworkspacesInputEnvelope, {
    nullable: true
  })
  createMany?: WorkspacesCreateManyTasks_tasksToworkspacesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereUniqueInput], {
    nullable: true
  })
  connect?: WorkspacesWhereUniqueInput[] | undefined;
}
