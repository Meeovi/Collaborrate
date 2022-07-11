import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateWithoutTasksInput } from "../inputs/ProjectsCreateWithoutTasksInput";
import { ProjectsUpdateWithoutTasksInput } from "../inputs/ProjectsUpdateWithoutTasksInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsUpsertWithWhereUniqueWithoutTasksInput", {
  isAbstract: true
})
export class ProjectsUpsertWithWhereUniqueWithoutTasksInput {
  @TypeGraphQL.Field(_type => ProjectsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsUpdateWithoutTasksInput, {
    nullable: false
  })
  update!: ProjectsUpdateWithoutTasksInput;

  @TypeGraphQL.Field(_type => ProjectsCreateWithoutTasksInput, {
    nullable: false
  })
  create!: ProjectsCreateWithoutTasksInput;
}
