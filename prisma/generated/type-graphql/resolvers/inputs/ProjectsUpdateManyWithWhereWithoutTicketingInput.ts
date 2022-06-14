import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsScalarWhereInput } from "../inputs/ProjectsScalarWhereInput";
import { ProjectsUpdateManyMutationInput } from "../inputs/ProjectsUpdateManyMutationInput";

@TypeGraphQL.InputType("ProjectsUpdateManyWithWhereWithoutTicketingInput", {
  isAbstract: true
})
export class ProjectsUpdateManyWithWhereWithoutTicketingInput {
  @TypeGraphQL.Field(_type => ProjectsScalarWhereInput, {
    nullable: false
  })
  where!: ProjectsScalarWhereInput;

  @TypeGraphQL.Field(_type => ProjectsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectsUpdateManyMutationInput;
}
