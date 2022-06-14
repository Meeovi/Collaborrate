import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateManyUsersInputEnvelope } from "../inputs/ProjectsCreateManyUsersInputEnvelope";
import { ProjectsCreateOrConnectWithoutUsersInput } from "../inputs/ProjectsCreateOrConnectWithoutUsersInput";
import { ProjectsCreateWithoutUsersInput } from "../inputs/ProjectsCreateWithoutUsersInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsCreateNestedManyWithoutUsersInput", {
  isAbstract: true
})
export class ProjectsCreateNestedManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [ProjectsCreateWithoutUsersInput], {
    nullable: true
  })
  create?: ProjectsCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: ProjectsCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectsCreateManyUsersInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectsCreateManyUsersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectsWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectsWhereUniqueInput[] | undefined;
}
