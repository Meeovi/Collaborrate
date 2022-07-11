import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateManyCustomersInputEnvelope } from "../inputs/ProjectsCreateManyCustomersInputEnvelope";
import { ProjectsCreateOrConnectWithoutCustomersInput } from "../inputs/ProjectsCreateOrConnectWithoutCustomersInput";
import { ProjectsCreateWithoutCustomersInput } from "../inputs/ProjectsCreateWithoutCustomersInput";
import { ProjectsScalarWhereInput } from "../inputs/ProjectsScalarWhereInput";
import { ProjectsUpdateManyWithWhereWithoutCustomersInput } from "../inputs/ProjectsUpdateManyWithWhereWithoutCustomersInput";
import { ProjectsUpdateWithWhereUniqueWithoutCustomersInput } from "../inputs/ProjectsUpdateWithWhereUniqueWithoutCustomersInput";
import { ProjectsUpsertWithWhereUniqueWithoutCustomersInput } from "../inputs/ProjectsUpsertWithWhereUniqueWithoutCustomersInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsUpdateManyWithoutCustomersNestedInput", {
  isAbstract: true
})
export class ProjectsUpdateManyWithoutCustomersNestedInput {
  @TypeGraphQL.Field(_type => [ProjectsCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: ProjectsCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: ProjectsCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsUpsertWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  upsert?: ProjectsUpsertWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectsCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectsCreateManyCustomersInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProjectsUpdateWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  update?: ProjectsUpdateWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsUpdateManyWithWhereWithoutCustomersInput], {
    nullable: true
  })
  updateMany?: ProjectsUpdateManyWithWhereWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectsScalarWhereInput[] | undefined;
}
