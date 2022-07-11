import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsUpdateWithoutUsersInput } from "../inputs/ProjectsUpdateWithoutUsersInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsUpdateWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class ProjectsUpdateWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => ProjectsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsUpdateWithoutUsersInput, {
    nullable: false
  })
  data!: ProjectsUpdateWithoutUsersInput;
}
