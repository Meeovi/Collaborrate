import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateOrConnectWithoutWorkspacesInput } from "../inputs/ProjectsCreateOrConnectWithoutWorkspacesInput";
import { ProjectsCreateWithoutWorkspacesInput } from "../inputs/ProjectsCreateWithoutWorkspacesInput";
import { ProjectsUpdateWithoutWorkspacesInput } from "../inputs/ProjectsUpdateWithoutWorkspacesInput";
import { ProjectsUpsertWithoutWorkspacesInput } from "../inputs/ProjectsUpsertWithoutWorkspacesInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsUpdateOneWithoutWorkspacesInput", {
  isAbstract: true
})
export class ProjectsUpdateOneWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => ProjectsCreateWithoutWorkspacesInput, {
    nullable: true
  })
  create?: ProjectsCreateWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsCreateOrConnectWithoutWorkspacesInput, {
    nullable: true
  })
  connectOrCreate?: ProjectsCreateOrConnectWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsUpsertWithoutWorkspacesInput, {
    nullable: true
  })
  upsert?: ProjectsUpsertWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ProjectsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsUpdateWithoutWorkspacesInput, {
    nullable: true
  })
  update?: ProjectsUpdateWithoutWorkspacesInput | undefined;
}
