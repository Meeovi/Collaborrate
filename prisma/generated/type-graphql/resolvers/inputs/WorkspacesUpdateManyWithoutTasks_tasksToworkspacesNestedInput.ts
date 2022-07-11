import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyTasks_tasksToworkspacesInputEnvelope } from "../inputs/WorkspacesCreateManyTasks_tasksToworkspacesInputEnvelope";
import { WorkspacesCreateOrConnectWithoutTasks_tasksToworkspacesInput } from "../inputs/WorkspacesCreateOrConnectWithoutTasks_tasksToworkspacesInput";
import { WorkspacesCreateWithoutTasks_tasksToworkspacesInput } from "../inputs/WorkspacesCreateWithoutTasks_tasksToworkspacesInput";
import { WorkspacesScalarWhereInput } from "../inputs/WorkspacesScalarWhereInput";
import { WorkspacesUpdateManyWithWhereWithoutTasks_tasksToworkspacesInput } from "../inputs/WorkspacesUpdateManyWithWhereWithoutTasks_tasksToworkspacesInput";
import { WorkspacesUpdateWithWhereUniqueWithoutTasks_tasksToworkspacesInput } from "../inputs/WorkspacesUpdateWithWhereUniqueWithoutTasks_tasksToworkspacesInput";
import { WorkspacesUpsertWithWhereUniqueWithoutTasks_tasksToworkspacesInput } from "../inputs/WorkspacesUpsertWithWhereUniqueWithoutTasks_tasksToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesUpdateManyWithoutTasks_tasksToworkspacesNestedInput", {
  isAbstract: true
})
export class WorkspacesUpdateManyWithoutTasks_tasksToworkspacesNestedInput {
  @TypeGraphQL.Field(_type => [WorkspacesCreateWithoutTasks_tasksToworkspacesInput], {
    nullable: true
  })
  create?: WorkspacesCreateWithoutTasks_tasksToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesCreateOrConnectWithoutTasks_tasksToworkspacesInput], {
    nullable: true
  })
  connectOrCreate?: WorkspacesCreateOrConnectWithoutTasks_tasksToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesUpsertWithWhereUniqueWithoutTasks_tasksToworkspacesInput], {
    nullable: true
  })
  upsert?: WorkspacesUpsertWithWhereUniqueWithoutTasks_tasksToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateManyTasks_tasksToworkspacesInputEnvelope, {
    nullable: true
  })
  createMany?: WorkspacesCreateManyTasks_tasksToworkspacesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereUniqueInput], {
    nullable: true
  })
  set?: WorkspacesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: WorkspacesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereUniqueInput], {
    nullable: true
  })
  delete?: WorkspacesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereUniqueInput], {
    nullable: true
  })
  connect?: WorkspacesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesUpdateWithWhereUniqueWithoutTasks_tasksToworkspacesInput], {
    nullable: true
  })
  update?: WorkspacesUpdateWithWhereUniqueWithoutTasks_tasksToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesUpdateManyWithWhereWithoutTasks_tasksToworkspacesInput], {
    nullable: true
  })
  updateMany?: WorkspacesUpdateManyWithWhereWithoutTasks_tasksToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WorkspacesScalarWhereInput[] | undefined;
}
