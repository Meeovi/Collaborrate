import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TasksUpdateInput } from "../../../inputs/TasksUpdateInput";
import { TasksWhereUniqueInput } from "../../../inputs/TasksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTasksArgs {
  @TypeGraphQL.Field(_type => TasksUpdateInput, {
    nullable: false
  })
  data!: TasksUpdateInput;

  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: false
  })
  where!: TasksWhereUniqueInput;
}
