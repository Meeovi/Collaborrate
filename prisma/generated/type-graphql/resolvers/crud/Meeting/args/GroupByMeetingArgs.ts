import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MeetingOrderByWithAggregationInput } from "../../../inputs/MeetingOrderByWithAggregationInput";
import { MeetingScalarWhereWithAggregatesInput } from "../../../inputs/MeetingScalarWhereWithAggregatesInput";
import { MeetingWhereInput } from "../../../inputs/MeetingWhereInput";
import { MeetingScalarFieldEnum } from "../../../../enums/MeetingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMeetingArgs {
  @TypeGraphQL.Field(_type => MeetingWhereInput, {
    nullable: true
  })
  where?: MeetingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MeetingOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MeetingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MeetingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "subject" | "start_date" | "end_date" | "duration" | "status" | "related_to" | "reminders" | "content" | "assigned_to" | "invitees" | "scheduling">;

  @TypeGraphQL.Field(_type => MeetingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MeetingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
