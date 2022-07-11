import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateWithoutTicketingInput } from "../inputs/ProjectsCreateWithoutTicketingInput";
import { ProjectsUpdateWithoutTicketingInput } from "../inputs/ProjectsUpdateWithoutTicketingInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsUpsertWithWhereUniqueWithoutTicketingInput", {
  isAbstract: true
})
export class ProjectsUpsertWithWhereUniqueWithoutTicketingInput {
  @TypeGraphQL.Field(_type => ProjectsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsUpdateWithoutTicketingInput, {
    nullable: false
  })
  update!: ProjectsUpdateWithoutTicketingInput;

  @TypeGraphQL.Field(_type => ProjectsCreateWithoutTicketingInput, {
    nullable: false
  })
  create!: ProjectsCreateWithoutTicketingInput;
}
