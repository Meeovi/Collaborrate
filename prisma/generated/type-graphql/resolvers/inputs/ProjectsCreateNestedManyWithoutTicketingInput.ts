import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateManyTicketingInputEnvelope } from "../inputs/ProjectsCreateManyTicketingInputEnvelope";
import { ProjectsCreateOrConnectWithoutTicketingInput } from "../inputs/ProjectsCreateOrConnectWithoutTicketingInput";
import { ProjectsCreateWithoutTicketingInput } from "../inputs/ProjectsCreateWithoutTicketingInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsCreateNestedManyWithoutTicketingInput", {
  isAbstract: true
})
export class ProjectsCreateNestedManyWithoutTicketingInput {
  @TypeGraphQL.Field(_type => [ProjectsCreateWithoutTicketingInput], {
    nullable: true
  })
  create?: ProjectsCreateWithoutTicketingInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsCreateOrConnectWithoutTicketingInput], {
    nullable: true
  })
  connectOrCreate?: ProjectsCreateOrConnectWithoutTicketingInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectsCreateManyTicketingInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectsCreateManyTicketingInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectsWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectsWhereUniqueInput[] | undefined;
}
