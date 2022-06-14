import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateWithoutProjects_projectsToworkspacesInput } from "../inputs/WorkspacesCreateWithoutProjects_projectsToworkspacesInput";
import { WorkspacesUpdateWithoutProjects_projectsToworkspacesInput } from "../inputs/WorkspacesUpdateWithoutProjects_projectsToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesUpsertWithWhereUniqueWithoutProjects_projectsToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesUpsertWithWhereUniqueWithoutProjects_projectsToworkspacesInput {
  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspacesUpdateWithoutProjects_projectsToworkspacesInput, {
    nullable: false
  })
  update!: WorkspacesUpdateWithoutProjects_projectsToworkspacesInput;

  @TypeGraphQL.Field(_type => WorkspacesCreateWithoutProjects_projectsToworkspacesInput, {
    nullable: false
  })
  create!: WorkspacesCreateWithoutProjects_projectsToworkspacesInput;
}
