import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateOrConnectWithoutWorkspacesInput } from "../inputs/ProjectsCreateOrConnectWithoutWorkspacesInput";
import { ProjectsCreateWithoutWorkspacesInput } from "../inputs/ProjectsCreateWithoutWorkspacesInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsCreateNestedOneWithoutWorkspacesInput", {
  isAbstract: true
})
export class ProjectsCreateNestedOneWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => ProjectsCreateWithoutWorkspacesInput, {
    nullable: true
  })
  create?: ProjectsCreateWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsCreateOrConnectWithoutWorkspacesInput, {
    nullable: true
  })
  connectOrCreate?: ProjectsCreateOrConnectWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectsWhereUniqueInput | undefined;
}
