import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("JobScheduleMaxAggregate", {
  isAbstract: true
})
export class JobScheduleMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  objectId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jobName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  params!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  startAfter!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  timeOfDay!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lastRun!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  repeatMinutes!: number | null;
}
