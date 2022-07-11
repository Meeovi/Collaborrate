import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobScheduleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/JobScheduleOrderByWithRelationAndSearchRelevanceInput";
import { JobScheduleWhereInput } from "../../../inputs/JobScheduleWhereInput";
import { JobScheduleWhereUniqueInput } from "../../../inputs/JobScheduleWhereUniqueInput";
import { JobScheduleScalarFieldEnum } from "../../../../enums/JobScheduleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstJobScheduleArgs {
  @TypeGraphQL.Field(_type => JobScheduleWhereInput, {
    nullable: true
  })
  where?: JobScheduleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [JobScheduleOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: JobScheduleOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => JobScheduleWhereUniqueInput, {
    nullable: true
  })
  cursor?: JobScheduleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [JobScheduleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"objectId" | "createdAt" | "updatedAt" | "jobName" | "description" | "params" | "startAfter" | "daysOfWeek" | "timeOfDay" | "lastRun" | "repeatMinutes" | "rperm" | "wperm"> | undefined;
}
