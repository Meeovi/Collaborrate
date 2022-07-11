import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TasksCreateManyInput } from "../../../inputs/TasksCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTasksArgs {
  @TypeGraphQL.Field(_type => [TasksCreateManyInput], {
    nullable: false
  })
  data!: TasksCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
