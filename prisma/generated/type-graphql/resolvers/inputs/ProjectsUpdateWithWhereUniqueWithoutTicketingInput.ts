import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsUpdateWithoutTicketingInput } from "../inputs/ProjectsUpdateWithoutTicketingInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsUpdateWithWhereUniqueWithoutTicketingInput", {
  isAbstract: true
})
export class ProjectsUpdateWithWhereUniqueWithoutTicketingInput {
  @TypeGraphQL.Field(_type => ProjectsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsUpdateWithoutTicketingInput, {
    nullable: false
  })
  data!: ProjectsUpdateWithoutTicketingInput;
}
