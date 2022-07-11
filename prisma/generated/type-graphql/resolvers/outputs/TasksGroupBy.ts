import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksAvgAggregate } from "../outputs/TasksAvgAggregate";
import { TasksCountAggregate } from "../outputs/TasksCountAggregate";
import { TasksMaxAggregate } from "../outputs/TasksMaxAggregate";
import { TasksMinAggregate } from "../outputs/TasksMinAggregate";
import { TasksSumAggregate } from "../outputs/TasksSumAggregate";

@TypeGraphQL.ObjectType("TasksGroupBy", {
  isAbstract: true
})
export class TasksGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subject!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  start_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  due_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priority!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  related_to!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contact!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assigned_to!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date_modified!: Date | null;

  @TypeGraphQL.Field(_type => TasksCountAggregate, {
    nullable: true
  })
  _count!: TasksCountAggregate | null;

  @TypeGraphQL.Field(_type => TasksAvgAggregate, {
    nullable: true
  })
  _avg!: TasksAvgAggregate | null;

  @TypeGraphQL.Field(_type => TasksSumAggregate, {
    nullable: true
  })
  _sum!: TasksSumAggregate | null;

  @TypeGraphQL.Field(_type => TasksMinAggregate, {
    nullable: true
  })
  _min!: TasksMinAggregate | null;

  @TypeGraphQL.Field(_type => TasksMaxAggregate, {
    nullable: true
  })
  _max!: TasksMaxAggregate | null;
}
