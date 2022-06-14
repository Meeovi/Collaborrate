import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyProjects_projectsToworkspacesInputEnvelope } from "../inputs/WorkspacesCreateManyProjects_projectsToworkspacesInputEnvelope";
import { WorkspacesCreateOrConnectWithoutProjects_projectsToworkspacesInput } from "../inputs/WorkspacesCreateOrConnectWithoutProjects_projectsToworkspacesInput";
import { WorkspacesCreateWithoutProjects_projectsToworkspacesInput } from "../inputs/WorkspacesCreateWithoutProjects_projectsToworkspacesInput";
import { WorkspacesScalarWhereInput } from "../inputs/WorkspacesScalarWhereInput";
import { WorkspacesUpdateManyWithWhereWithoutProjects_projectsToworkspacesInput } from "../inputs/WorkspacesUpdateManyWithWhereWithoutProjects_projectsToworkspacesInput";
import { WorkspacesUpdateWithWhereUniqueWithoutProjects_projectsToworkspacesInput } from "../inputs/WorkspacesUpdateWithWhereUniqueWithoutProjects_projectsToworkspacesInput";
import { WorkspacesUpsertWithWhereUniqueWithoutProjects_projectsToworkspacesInput } from "../inputs/WorkspacesUpsertWithWhereUniqueWithoutProjects_projectsToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesUpdateManyWithoutProjects_projectsToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesUpdateManyWithoutProjects_projectsToworkspacesInput {
  @TypeGraphQL.Field(_type => [WorkspacesCreateWithoutProjects_projectsToworkspacesInput], {
    nullable: true
  })
  create?: WorkspacesCreateWithoutProjects_projectsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesCreateOrConnectWithoutProjects_projectsToworkspacesInput], {
    nullable: true
  })
  connectOrCreate?: WorkspacesCreateOrConnectWithoutProjects_projectsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesUpsertWithWhereUniqueWithoutProjects_projectsToworkspacesInput], {
    nullable: true
  })
  upsert?: WorkspacesUpsertWithWhereUniqueWithoutProjects_projectsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateManyProjects_projectsToworkspacesInputEnvelope, {
    nullable: true
  })
  createMany?: WorkspacesCreateManyProjects_projectsToworkspacesInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [WorkspacesUpdateWithWhereUniqueWithoutProjects_projectsToworkspacesInput], {
    nullable: true
  })
  update?: WorkspacesUpdateWithWhereUniqueWithoutProjects_projectsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesUpdateManyWithWhereWithoutProjects_projectsToworkspacesInput], {
    nullable: true
  })
  updateMany?: WorkspacesUpdateManyWithWhereWithoutProjects_projectsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WorkspacesScalarWhereInput[] | undefined;
}
