import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateOrConnectWithoutMediamanagerInput } from "../inputs/TasksCreateOrConnectWithoutMediamanagerInput";
import { TasksCreateWithoutMediamanagerInput } from "../inputs/TasksCreateWithoutMediamanagerInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksCreateNestedOneWithoutMediamanagerInput", {
  isAbstract: true
})
export class TasksCreateNestedOneWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => TasksCreateWithoutMediamanagerInput, {
    nullable: true
  })
  create?: TasksCreateWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => TasksCreateOrConnectWithoutMediamanagerInput, {
    nullable: true
  })
  connectOrCreate?: TasksCreateOrConnectWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: true
  })
  connect?: TasksWhereUniqueInput | undefined;
}
