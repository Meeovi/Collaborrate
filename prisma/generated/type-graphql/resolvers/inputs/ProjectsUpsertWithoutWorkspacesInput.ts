import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateWithoutWorkspacesInput } from "../inputs/ProjectsCreateWithoutWorkspacesInput";
import { ProjectsUpdateWithoutWorkspacesInput } from "../inputs/ProjectsUpdateWithoutWorkspacesInput";

@TypeGraphQL.InputType("ProjectsUpsertWithoutWorkspacesInput", {
  isAbstract: true
})
export class ProjectsUpsertWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => ProjectsUpdateWithoutWorkspacesInput, {
    nullable: false
  })
  update!: ProjectsUpdateWithoutWorkspacesInput;

  @TypeGraphQL.Field(_type => ProjectsCreateWithoutWorkspacesInput, {
    nullable: false
  })
  create!: ProjectsCreateWithoutWorkspacesInput;
}
