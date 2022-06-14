import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsUpdateWithoutCustomersInput } from "../inputs/ProjectsUpdateWithoutCustomersInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsUpdateWithWhereUniqueWithoutCustomersInput", {
  isAbstract: true
})
export class ProjectsUpdateWithWhereUniqueWithoutCustomersInput {
  @TypeGraphQL.Field(_type => ProjectsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsUpdateWithoutCustomersInput, {
    nullable: false
  })
  data!: ProjectsUpdateWithoutCustomersInput;
}
