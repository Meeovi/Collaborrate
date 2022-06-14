import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TasksWhereInput } from "../../../inputs/TasksWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTasksArgs {
  @TypeGraphQL.Field(_type => TasksWhereInput, {
    nullable: true
  })
  where?: TasksWhereInput | undefined;
}
