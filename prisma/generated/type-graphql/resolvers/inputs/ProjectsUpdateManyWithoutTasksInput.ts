import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateManyTasksInputEnvelope } from "../inputs/ProjectsCreateManyTasksInputEnvelope";
import { ProjectsCreateOrConnectWithoutTasksInput } from "../inputs/ProjectsCreateOrConnectWithoutTasksInput";
import { ProjectsCreateWithoutTasksInput } from "../inputs/ProjectsCreateWithoutTasksInput";
import { ProjectsScalarWhereInput } from "../inputs/ProjectsScalarWhereInput";
import { ProjectsUpdateManyWithWhereWithoutTasksInput } from "../inputs/ProjectsUpdateManyWithWhereWithoutTasksInput";
import { ProjectsUpdateWithWhereUniqueWithoutTasksInput } from "../inputs/ProjectsUpdateWithWhereUniqueWithoutTasksInput";
import { ProjectsUpsertWithWhereUniqueWithoutTasksInput } from "../inputs/ProjectsUpsertWithWhereUniqueWithoutTasksInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsUpdateManyWithoutTasksInput", {
  isAbstract: true
})
export class ProjectsUpdateManyWithoutTasksInput {
  @TypeGraphQL.Field(_type => [ProjectsCreateWithoutTasksInput], {
    nullable: true
  })
  create?: ProjectsCreateWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsCreateOrConnectWithoutTasksInput], {
    nullable: true
  })
  connectOrCreate?: ProjectsCreateOrConnectWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsUpsertWithWhereUniqueWithoutTasksInput], {
    nullable: true
  })
  upsert?: ProjectsUpsertWithWhereUniqueWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectsCreateManyTasksInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectsCreateManyTasksInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProjectsUpdateWithWhereUniqueWithoutTasksInput], {
    nullable: true
  })
  update?: ProjectsUpdateWithWhereUniqueWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsUpdateManyWithWhereWithoutTasksInput], {
    nullable: true
  })
  updateMany?: ProjectsUpdateManyWithWhereWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectsScalarWhereInput[] | undefined;
}
