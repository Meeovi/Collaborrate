import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TasksUpdateManyMutationInput } from "../../../inputs/TasksUpdateManyMutationInput";
import { TasksWhereInput } from "../../../inputs/TasksWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTasksArgs {
  @TypeGraphQL.Field(_type => TasksUpdateManyMutationInput, {
    nullable: false
  })
  data!: TasksUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TasksWhereInput, {
    nullable: true
  })
  where?: TasksWhereInput | undefined;
}
