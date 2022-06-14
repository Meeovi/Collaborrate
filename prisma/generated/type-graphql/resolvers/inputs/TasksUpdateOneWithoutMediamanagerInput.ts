import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateOrConnectWithoutMediamanagerInput } from "../inputs/TasksCreateOrConnectWithoutMediamanagerInput";
import { TasksCreateWithoutMediamanagerInput } from "../inputs/TasksCreateWithoutMediamanagerInput";
import { TasksUpdateWithoutMediamanagerInput } from "../inputs/TasksUpdateWithoutMediamanagerInput";
import { TasksUpsertWithoutMediamanagerInput } from "../inputs/TasksUpsertWithoutMediamanagerInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksUpdateOneWithoutMediamanagerInput", {
  isAbstract: true
})
export class TasksUpdateOneWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => TasksCreateWithoutMediamanagerInput, {
    nullable: true
  })
  create?: TasksCreateWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => TasksCreateOrConnectWithoutMediamanagerInput, {
    nullable: true
  })
  connectOrCreate?: TasksCreateOrConnectWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => TasksUpsertWithoutMediamanagerInput, {
    nullable: true
  })
  upsert?: TasksUpsertWithoutMediamanagerInput | undefined;

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

  @TypeGraphQL.Field(_type => TasksUpdateWithoutMediamanagerInput, {
    nullable: true
  })
  update?: TasksUpdateWithoutMediamanagerInput | undefined;
}
