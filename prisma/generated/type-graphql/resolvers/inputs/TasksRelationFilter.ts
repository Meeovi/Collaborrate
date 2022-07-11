import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksWhereInput } from "../inputs/TasksWhereInput";

@TypeGraphQL.InputType("TasksRelationFilter", {
  isAbstract: true
})
export class TasksRelationFilter {
  @TypeGraphQL.Field(_type => TasksWhereInput, {
    nullable: true
  })
  is?: TasksWhereInput | undefined;

  @TypeGraphQL.Field(_type => TasksWhereInput, {
    nullable: true
  })
  isNot?: TasksWhereInput | undefined;
}
