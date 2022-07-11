import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateOrConnectWithoutWorkspacesInput } from "../inputs/TasksCreateOrConnectWithoutWorkspacesInput";
import { TasksCreateWithoutWorkspacesInput } from "../inputs/TasksCreateWithoutWorkspacesInput";
import { TasksUpdateWithoutWorkspacesInput } from "../inputs/TasksUpdateWithoutWorkspacesInput";
import { TasksUpsertWithoutWorkspacesInput } from "../inputs/TasksUpsertWithoutWorkspacesInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksUpdateOneWithoutWorkspacesNestedInput", {
  isAbstract: true
})
export class TasksUpdateOneWithoutWorkspacesNestedInput {
  @TypeGraphQL.Field(_type => TasksCreateWithoutWorkspacesInput, {
    nullable: true
  })
  create?: TasksCreateWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => TasksCreateOrConnectWithoutWorkspacesInput, {
    nullable: true
  })
  connectOrCreate?: TasksCreateOrConnectWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => TasksUpsertWithoutWorkspacesInput, {
    nullable: true
  })
  upsert?: TasksUpsertWithoutWorkspacesInput | undefined;

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

  @TypeGraphQL.Field(_type => TasksUpdateWithoutWorkspacesInput, {
    nullable: true
  })
  update?: TasksUpdateWithoutWorkspacesInput | undefined;
}
