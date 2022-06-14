import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsScalarWhereInput } from "../inputs/ProjectsScalarWhereInput";
import { ProjectsUpdateManyMutationInput } from "../inputs/ProjectsUpdateManyMutationInput";

@TypeGraphQL.InputType("ProjectsUpdateManyWithWhereWithoutTasksInput", {
  isAbstract: true
})
export class ProjectsUpdateManyWithWhereWithoutTasksInput {
  @TypeGraphQL.Field(_type => ProjectsScalarWhereInput, {
    nullable: false
  })
  where!: ProjectsScalarWhereInput;

  @TypeGraphQL.Field(_type => ProjectsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectsUpdateManyMutationInput;
}
