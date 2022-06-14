import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateWithoutUsersInput } from "../inputs/ProjectsCreateWithoutUsersInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class ProjectsCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => ProjectsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsCreateWithoutUsersInput, {
    nullable: false
  })
  create!: ProjectsCreateWithoutUsersInput;
}
