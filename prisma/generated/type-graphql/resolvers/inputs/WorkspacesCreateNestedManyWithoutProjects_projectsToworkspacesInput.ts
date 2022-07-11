import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyProjects_projectsToworkspacesInputEnvelope } from "../inputs/WorkspacesCreateManyProjects_projectsToworkspacesInputEnvelope";
import { WorkspacesCreateOrConnectWithoutProjects_projectsToworkspacesInput } from "../inputs/WorkspacesCreateOrConnectWithoutProjects_projectsToworkspacesInput";
import { WorkspacesCreateWithoutProjects_projectsToworkspacesInput } from "../inputs/WorkspacesCreateWithoutProjects_projectsToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesCreateNestedManyWithoutProjects_projectsToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesCreateNestedManyWithoutProjects_projectsToworkspacesInput {
  @TypeGraphQL.Field(_type => [WorkspacesCreateWithoutProjects_projectsToworkspacesInput], {
    nullable: true
  })
  create?: WorkspacesCreateWithoutProjects_projectsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesCreateOrConnectWithoutProjects_projectsToworkspacesInput], {
    nullable: true
  })
  connectOrCreate?: WorkspacesCreateOrConnectWithoutProjects_projectsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateManyProjects_projectsToworkspacesInputEnvelope, {
    nullable: true
  })
  createMany?: WorkspacesCreateManyProjects_projectsToworkspacesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereUniqueInput], {
    nullable: true
  })
  connect?: WorkspacesWhereUniqueInput[] | undefined;
}
