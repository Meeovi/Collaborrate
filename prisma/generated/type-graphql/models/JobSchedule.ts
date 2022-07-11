import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("JobSchedule", {
  isAbstract: true
})
export class JobSchedule {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  objectId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jobName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  params?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  startAfter?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  daysOfWeek?: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  timeOfDay?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lastRun?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  repeatMinutes?: number | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  rperm!: string[];

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  wperm!: string[];
}
