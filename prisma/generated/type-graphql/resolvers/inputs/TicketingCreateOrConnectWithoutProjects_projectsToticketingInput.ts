import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TicketingCreateWithoutProjects_projectsToticketingInput } from "../inputs/TicketingCreateWithoutProjects_projectsToticketingInput";
import { TicketingWhereUniqueInput } from "../inputs/TicketingWhereUniqueInput";

@TypeGraphQL.InputType("TicketingCreateOrConnectWithoutProjects_projectsToticketingInput", {
  isAbstract: true
})
export class TicketingCreateOrConnectWithoutProjects_projectsToticketingInput {
  @TypeGraphQL.Field(_type => TicketingWhereUniqueInput, {
    nullable: false
  })
  where!: TicketingWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketingCreateWithoutProjects_projectsToticketingInput, {
    nullable: false
  })
  create!: TicketingCreateWithoutProjects_projectsToticketingInput;
}
