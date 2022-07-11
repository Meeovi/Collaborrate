import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TasksCreateInput } from "../../../inputs/TasksCreateInput";
import { TasksUpdateInput } from "../../../inputs/TasksUpdateInput";
import { TasksWhereUniqueInput } from "../../../inputs/TasksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTasksArgs {
  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: false
  })
  where!: TasksWhereUniqueInput;

  @TypeGraphQL.Field(_type => TasksCreateInput, {
    nullable: false
  })
  create!: TasksCreateInput;

  @TypeGraphQL.Field(_type => TasksUpdateInput, {
    nullable: false
  })
  update!: TasksUpdateInput;
}
