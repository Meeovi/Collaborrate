import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsUpdateWithoutTasksInput } from "../inputs/ProjectsUpdateWithoutTasksInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsUpdateWithWhereUniqueWithoutTasksInput", {
  isAbstract: true
})
export class ProjectsUpdateWithWhereUniqueWithoutTasksInput {
  @TypeGraphQL.Field(_type => ProjectsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsUpdateWithoutTasksInput, {
    nullable: false
  })
  data!: ProjectsUpdateWithoutTasksInput;
}
