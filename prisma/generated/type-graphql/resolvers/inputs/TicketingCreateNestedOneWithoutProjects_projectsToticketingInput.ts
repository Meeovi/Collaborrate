import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TicketingCreateOrConnectWithoutProjects_projectsToticketingInput } from "../inputs/TicketingCreateOrConnectWithoutProjects_projectsToticketingInput";
import { TicketingCreateWithoutProjects_projectsToticketingInput } from "../inputs/TicketingCreateWithoutProjects_projectsToticketingInput";
import { TicketingWhereUniqueInput } from "../inputs/TicketingWhereUniqueInput";

@TypeGraphQL.InputType("TicketingCreateNestedOneWithoutProjects_projectsToticketingInput", {
  isAbstract: true
})
export class TicketingCreateNestedOneWithoutProjects_projectsToticketingInput {
  @TypeGraphQL.Field(_type => TicketingCreateWithoutProjects_projectsToticketingInput, {
    nullable: true
  })
  create?: TicketingCreateWithoutProjects_projectsToticketingInput | undefined;

  @TypeGraphQL.Field(_type => TicketingCreateOrConnectWithoutProjects_projectsToticketingInput, {
    nullable: true
  })
  connectOrCreate?: TicketingCreateOrConnectWithoutProjects_projectsToticketingInput | undefined;

  @TypeGraphQL.Field(_type => TicketingWhereUniqueInput, {
    nullable: true
  })
  connect?: TicketingWhereUniqueInput | undefined;
}
