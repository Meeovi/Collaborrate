import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateOrConnectWithoutProjectsInput } from "../inputs/TasksCreateOrConnectWithoutProjectsInput";
import { TasksCreateWithoutProjectsInput } from "../inputs/TasksCreateWithoutProjectsInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksCreateNestedOneWithoutProjectsInput", {
  isAbstract: true
})
export class TasksCreateNestedOneWithoutProjectsInput {
  @TypeGraphQL.Field(_type => TasksCreateWithoutProjectsInput, {
    nullable: true
  })
  create?: TasksCreateWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => TasksCreateOrConnectWithoutProjectsInput, {
    nullable: true
  })
  connectOrCreate?: TasksCreateOrConnectWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: true
  })
  connect?: TasksWhereUniqueInput | undefined;
}
