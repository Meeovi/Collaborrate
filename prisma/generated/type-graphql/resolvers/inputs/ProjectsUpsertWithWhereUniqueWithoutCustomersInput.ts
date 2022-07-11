import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateWithoutCustomersInput } from "../inputs/ProjectsCreateWithoutCustomersInput";
import { ProjectsUpdateWithoutCustomersInput } from "../inputs/ProjectsUpdateWithoutCustomersInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsUpsertWithWhereUniqueWithoutCustomersInput", {
  isAbstract: true
})
export class ProjectsUpsertWithWhereUniqueWithoutCustomersInput {
  @TypeGraphQL.Field(_type => ProjectsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsUpdateWithoutCustomersInput, {
    nullable: false
  })
  update!: ProjectsUpdateWithoutCustomersInput;

  @TypeGraphQL.Field(_type => ProjectsCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: ProjectsCreateWithoutCustomersInput;
}
