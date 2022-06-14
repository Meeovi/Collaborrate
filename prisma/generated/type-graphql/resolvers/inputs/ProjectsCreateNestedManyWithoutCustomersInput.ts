import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateManyCustomersInputEnvelope } from "../inputs/ProjectsCreateManyCustomersInputEnvelope";
import { ProjectsCreateOrConnectWithoutCustomersInput } from "../inputs/ProjectsCreateOrConnectWithoutCustomersInput";
import { ProjectsCreateWithoutCustomersInput } from "../inputs/ProjectsCreateWithoutCustomersInput";
import { ProjectsWhereUniqueInput } from "../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsCreateNestedManyWithoutCustomersInput", {
  isAbstract: true
})
export class ProjectsCreateNestedManyWithoutCustomersInput {
  @TypeGraphQL.Field(_type => [ProjectsCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: ProjectsCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: ProjectsCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectsCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectsCreateManyCustomersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectsWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectsWhereUniqueInput[] | undefined;
}
