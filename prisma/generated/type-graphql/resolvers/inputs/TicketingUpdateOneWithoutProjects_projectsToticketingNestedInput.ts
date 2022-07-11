import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TicketingCreateOrConnectWithoutProjects_projectsToticketingInput } from "../inputs/TicketingCreateOrConnectWithoutProjects_projectsToticketingInput";
import { TicketingCreateWithoutProjects_projectsToticketingInput } from "../inputs/TicketingCreateWithoutProjects_projectsToticketingInput";
import { TicketingUpdateWithoutProjects_projectsToticketingInput } from "../inputs/TicketingUpdateWithoutProjects_projectsToticketingInput";
import { TicketingUpsertWithoutProjects_projectsToticketingInput } from "../inputs/TicketingUpsertWithoutProjects_projectsToticketingInput";
import { TicketingWhereUniqueInput } from "../inputs/TicketingWhereUniqueInput";

@TypeGraphQL.InputType("TicketingUpdateOneWithoutProjects_projectsToticketingNestedInput", {
  isAbstract: true
})
export class TicketingUpdateOneWithoutProjects_projectsToticketingNestedInput {
  @TypeGraphQL.Field(_type => TicketingCreateWithoutProjects_projectsToticketingInput, {
    nullable: true
  })
  create?: TicketingCreateWithoutProjects_projectsToticketingInput | undefined;

  @TypeGraphQL.Field(_type => TicketingCreateOrConnectWithoutProjects_projectsToticketingInput, {
    nullable: true
  })
  connectOrCreate?: TicketingCreateOrConnectWithoutProjects_projectsToticketingInput | undefined;

  @TypeGraphQL.Field(_type => TicketingUpsertWithoutProjects_projectsToticketingInput, {
    nullable: true
  })
  upsert?: TicketingUpsertWithoutProjects_projectsToticketingInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TicketingWhereUniqueInput, {
    nullable: true
  })
  connect?: TicketingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TicketingUpdateWithoutProjects_projectsToticketingInput, {
    nullable: true
  })
  update?: TicketingUpdateWithoutProjects_projectsToticketingInput | undefined;
}
