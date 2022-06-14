import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateWithoutTicketingInput } from "../inputs/ProjectsCreateWithoutTicketingInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsCreateOrConnectWithoutTicketingInput", {
  isAbstract: true
})
export class ProjectsCreateOrConnectWithoutTicketingInput {
  @TypeGraphQL.Field(_type => ProjectsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsCreateWithoutTicketingInput, {
    nullable: false
  })
  create!: ProjectsCreateWithoutTicketingInput;
}
