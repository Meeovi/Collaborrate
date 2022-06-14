import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Mediamanager } from "../models/Mediamanager";
import { Projects } from "../models/Projects";
import { Workspaces } from "../models/Workspaces";
import { TasksCount } from "../resolvers/outputs/TasksCount";

@TypeGraphQL.ObjectType("Tasks", {
  isAbstract: true
})
export class Tasks {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subject?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  start_date?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  due_date?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priority?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  related_to?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contact?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assigned_to?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date_modified?: Date | null;

  mediamanager?: Mediamanager[];

  projects?: Projects[];

  workspaces?: Workspaces[];

  @TypeGraphQL.Field(_type => TasksCount, {
    nullable: true
  })
  _count?: TasksCount | null;
}
