import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateManyTicketingInputEnvelope } from "../inputs/ProjectsCreateManyTicketingInputEnvelope";
import { ProjectsCreateOrConnectWithoutTicketingInput } from "../inputs/ProjectsCreateOrConnectWithoutTicketingInput";
import { ProjectsCreateWithoutTicketingInput } from "../inputs/ProjectsCreateWithoutTicketingInput";
import { ProjectsScalarWhereInput } from "../inputs/ProjectsScalarWhereInput";
import { ProjectsUpdateManyWithWhereWithoutTicketingInput } from "../inputs/ProjectsUpdateManyWithWhereWithoutTicketingInput";
import { ProjectsUpdateWithWhereUniqueWithoutTicketingInput } from "../inputs/ProjectsUpdateWithWhereUniqueWithoutTicketingInput";
import { ProjectsUpsertWithWhereUniqueWithoutTicketingInput } from "../inputs/ProjectsUpsertWithWhereUniqueWithoutTicketingInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsUpdateManyWithoutTicketingNestedInput", {
  isAbstract: true
})
export class ProjectsUpdateManyWithoutTicketingNestedInput {
  @TypeGraphQL.Field(_type => [ProjectsCreateWithoutTicketingInput], {
    nullable: true
  })
  create?: ProjectsCreateWithoutTicketingInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsCreateOrConnectWithoutTicketingInput], {
    nullable: true
  })
  connectOrCreate?: ProjectsCreateOrConnectWithoutTicketingInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsUpsertWithWhereUniqueWithoutTicketingInput], {
    nullable: true
  })
  upsert?: ProjectsUpsertWithWhereUniqueWithoutTicketingInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectsCreateManyTicketingInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectsCreateManyTicketingInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectsWhereUniqueInput], {
    nullable: true
  })
  set?: ProjectsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProjectsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsWhereUniqueInput], {
    nullable: true
  })
  delete?: ProjectsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsUpdateWithWhereUniqueWithoutTicketingInput], {
    nullable: true
  })
  update?: ProjectsUpdateWithWhereUniqueWithoutTicketingInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsUpdateManyWithWhereWithoutTicketingInput], {
    nullable: true
  })
  updateMany?: ProjectsUpdateManyWithWhereWithoutTicketingInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectsScalarWhereInput[] | undefined;
}
