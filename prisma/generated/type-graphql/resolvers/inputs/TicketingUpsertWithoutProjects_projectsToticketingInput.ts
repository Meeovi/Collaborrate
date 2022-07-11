import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TicketingCreateWithoutProjects_projectsToticketingInput } from "../inputs/TicketingCreateWithoutProjects_projectsToticketingInput";
import { TicketingUpdateWithoutProjects_projectsToticketingInput } from "../inputs/TicketingUpdateWithoutProjects_projectsToticketingInput";

@TypeGraphQL.InputType("TicketingUpsertWithoutProjects_projectsToticketingInput", {
  isAbstract: true
})
export class TicketingUpsertWithoutProjects_projectsToticketingInput {
  @TypeGraphQL.Field(_type => TicketingUpdateWithoutProjects_projectsToticketingInput, {
    nullable: false
  })
  update!: TicketingUpdateWithoutProjects_projectsToticketingInput;

  @TypeGraphQL.Field(_type => TicketingCreateWithoutProjects_projectsToticketingInput, {
    nullable: false
  })
  create!: TicketingCreateWithoutProjects_projectsToticketingInput;
}
