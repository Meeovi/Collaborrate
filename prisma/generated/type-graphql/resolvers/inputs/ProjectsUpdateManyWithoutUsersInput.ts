import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateManyUsersInputEnvelope } from "../inputs/ProjectsCreateManyUsersInputEnvelope";
import { ProjectsCreateOrConnectWithoutUsersInput } from "../inputs/ProjectsCreateOrConnectWithoutUsersInput";
import { ProjectsCreateWithoutUsersInput } from "../inputs/ProjectsCreateWithoutUsersInput";
import { ProjectsScalarWhereInput } from "../inputs/ProjectsScalarWhereInput";
import { ProjectsUpdateManyWithWhereWithoutUsersInput } from "../inputs/ProjectsUpdateManyWithWhereWithoutUsersInput";
import { ProjectsUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/ProjectsUpdateWithWhereUniqueWithoutUsersInput";
import { ProjectsUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/ProjectsUpsertWithWhereUniqueWithoutUsersInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsUpdateManyWithoutUsersInput", {
  isAbstract: true
})
export class ProjectsUpdateManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [ProjectsCreateWithoutUsersInput], {
    nullable: true
  })
  create?: ProjectsCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: ProjectsCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  upsert?: ProjectsUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectsCreateManyUsersInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectsCreateManyUsersInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProjectsUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  update?: ProjectsUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsUpdateManyWithWhereWithoutUsersInput], {
    nullable: true
  })
  updateMany?: ProjectsUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectsScalarWhereInput[] | undefined;
}
