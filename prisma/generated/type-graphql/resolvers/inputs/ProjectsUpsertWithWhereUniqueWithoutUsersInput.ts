import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateWithoutUsersInput } from "../inputs/ProjectsCreateWithoutUsersInput";
import { ProjectsUpdateWithoutUsersInput } from "../inputs/ProjectsUpdateWithoutUsersInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsUpsertWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class ProjectsUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => ProjectsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: ProjectsUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => ProjectsCreateWithoutUsersInput, {
    nullable: false
  })
  create!: ProjectsCreateWithoutUsersInput;
}
