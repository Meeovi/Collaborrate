import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateWithoutTasksInput } from "../inputs/ProjectsCreateWithoutTasksInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsCreateOrConnectWithoutTasksInput", {
  isAbstract: true
})
export class ProjectsCreateOrConnectWithoutTasksInput {
  @TypeGraphQL.Field(_type => ProjectsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsCreateWithoutTasksInput, {
    nullable: false
  })
  create!: ProjectsCreateWithoutTasksInput;
}
