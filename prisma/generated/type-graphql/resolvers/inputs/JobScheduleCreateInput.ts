import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JobScheduleCreaterpermInput } from "../inputs/JobScheduleCreaterpermInput";
import { JobScheduleCreatewpermInput } from "../inputs/JobScheduleCreatewpermInput";

@TypeGraphQL.InputType("JobScheduleCreateInput", {
  isAbstract: true
})
export class JobScheduleCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  objectId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jobName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  params?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  startAfter?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  daysOfWeek?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  timeOfDay?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lastRun?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  repeatMinutes?: number | undefined;

  @TypeGraphQL.Field(_type => JobScheduleCreaterpermInput, {
    nullable: true
  })
  rperm?: JobScheduleCreaterpermInput | undefined;

  @TypeGraphQL.Field(_type => JobScheduleCreatewpermInput, {
    nullable: true
  })
  wperm?: JobScheduleCreatewpermInput | undefined;
}
