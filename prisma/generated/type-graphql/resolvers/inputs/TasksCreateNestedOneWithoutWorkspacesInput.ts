import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateOrConnectWithoutWorkspacesInput } from "../inputs/TasksCreateOrConnectWithoutWorkspacesInput";
import { TasksCreateWithoutWorkspacesInput } from "../inputs/TasksCreateWithoutWorkspacesInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksCreateNestedOneWithoutWorkspacesInput", {
  isAbstract: true
})
export class TasksCreateNestedOneWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => TasksCreateWithoutWorkspacesInput, {
    nullable: true
  })
  create?: TasksCreateWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => TasksCreateOrConnectWithoutWorkspacesInput, {
    nullable: true
  })
  connectOrCreate?: TasksCreateOrConnectWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: true
  })
  connect?: TasksWhereUniqueInput | undefined;
}
