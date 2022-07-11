import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateManyTasksInputEnvelope } from "../inputs/ProjectsCreateManyTasksInputEnvelope";
import { ProjectsCreateOrConnectWithoutTasksInput } from "../inputs/ProjectsCreateOrConnectWithoutTasksInput";
import { ProjectsCreateWithoutTasksInput } from "../inputs/ProjectsCreateWithoutTasksInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsCreateNestedManyWithoutTasksInput", {
  isAbstract: true
})
export class ProjectsCreateNestedManyWithoutTasksInput {
  @TypeGraphQL.Field(_type => [ProjectsCreateWithoutTasksInput], {
    nullable: true
  })
  create?: ProjectsCreateWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsCreateOrConnectWithoutTasksInput], {
    nullable: true
  })
  connectOrCreate?: ProjectsCreateOrConnectWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectsCreateManyTasksInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectsCreateManyTasksInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectsWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectsWhereUniqueInput[] | undefined;
}
