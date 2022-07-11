import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateWithoutCustomersInput } from "../inputs/ProjectsCreateWithoutCustomersInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsCreateOrConnectWithoutCustomersInput", {
  isAbstract: true
})
export class ProjectsCreateOrConnectWithoutCustomersInput {
  @TypeGraphQL.Field(_type => ProjectsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: ProjectsCreateWithoutCustomersInput;
}
