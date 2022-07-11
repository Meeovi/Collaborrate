import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TasksCreateInput } from "../../../inputs/TasksCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTasksArgs {
  @TypeGraphQL.Field(_type => TasksCreateInput, {
    nullable: false
  })
  data!: TasksCreateInput;
}
