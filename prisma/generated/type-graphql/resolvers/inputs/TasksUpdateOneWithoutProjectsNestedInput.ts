import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateOrConnectWithoutProjectsInput } from "../inputs/TasksCreateOrConnectWithoutProjectsInput";
import { TasksCreateWithoutProjectsInput } from "../inputs/TasksCreateWithoutProjectsInput";
import { TasksUpdateWithoutProjectsInput } from "../inputs/TasksUpdateWithoutProjectsInput";
import { TasksUpsertWithoutProjectsInput } from "../inputs/TasksUpsertWithoutProjectsInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksUpdateOneWithoutProjectsNestedInput", {
  isAbstract: true
})
export class TasksUpdateOneWithoutProjectsNestedInput {
  @TypeGraphQL.Field(_type => TasksCreateWithoutProjectsInput, {
    nullable: true
  })
  create?: TasksCreateWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => TasksCreateOrConnectWithoutProjectsInput, {
    nullable: true
  })
  connectOrCreate?: TasksCreateOrConnectWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => TasksUpsertWithoutProjectsInput, {
    nullable: true
  })
  upsert?: TasksUpsertWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: true
  })
  connect?: TasksWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TasksUpdateWithoutProjectsInput, {
    nullable: true
  })
  update?: TasksUpdateWithoutProjectsInput | undefined;
}
