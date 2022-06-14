import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesUpdateWithoutProjects_projectsToworkspacesInput } from "../inputs/WorkspacesUpdateWithoutProjects_projectsToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesUpdateWithWhereUniqueWithoutProjects_projectsToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesUpdateWithWhereUniqueWithoutProjects_projectsToworkspacesInput {
  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspacesUpdateWithoutProjects_projectsToworkspacesInput, {
    nullable: false
  })
  data!: WorkspacesUpdateWithoutProjects_projectsToworkspacesInput;
}
