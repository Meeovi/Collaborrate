import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobScheduleOrderByWithAggregationInput } from "../../../inputs/JobScheduleOrderByWithAggregationInput";
import { JobScheduleScalarWhereWithAggregatesInput } from "../../../inputs/JobScheduleScalarWhereWithAggregatesInput";
import { JobScheduleWhereInput } from "../../../inputs/JobScheduleWhereInput";
import { JobScheduleScalarFieldEnum } from "../../../../enums/JobScheduleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByJobScheduleArgs {
  @TypeGraphQL.Field(_type => JobScheduleWhereInput, {
    nullable: true
  })
  where?: JobScheduleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [JobScheduleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: JobScheduleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [JobScheduleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"objectId" | "createdAt" | "updatedAt" | "jobName" | "description" | "params" | "startAfter" | "daysOfWeek" | "timeOfDay" | "lastRun" | "repeatMinutes" | "rperm" | "wperm">;

  @TypeGraphQL.Field(_type => JobScheduleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: JobScheduleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
