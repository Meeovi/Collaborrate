import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateWithoutWorkspacesInput } from "../inputs/ProjectsCreateWithoutWorkspacesInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsCreateOrConnectWithoutWorkspacesInput", {
  isAbstract: true
})
export class ProjectsCreateOrConnectWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => ProjectsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsCreateWithoutWorkspacesInput, {
    nullable: false
  })
  create!: ProjectsCreateWithoutWorkspacesInput;
}
