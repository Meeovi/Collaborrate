import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateWithoutProjects_projectsToworkspacesInput } from "../inputs/WorkspacesCreateWithoutProjects_projectsToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesCreateOrConnectWithoutProjects_projectsToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesCreateOrConnectWithoutProjects_projectsToworkspacesInput {
  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspacesCreateWithoutProjects_projectsToworkspacesInput, {
    nullable: false
  })
  create!: WorkspacesCreateWithoutProjects_projectsToworkspacesInput;
}
