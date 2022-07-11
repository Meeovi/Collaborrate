import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MeetingOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MeetingOrderByWithRelationAndSearchRelevanceInput";
import { MeetingWhereInput } from "../../../inputs/MeetingWhereInput";
import { MeetingWhereUniqueInput } from "../../../inputs/MeetingWhereUniqueInput";
import { MeetingScalarFieldEnum } from "../../../../enums/MeetingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMeetingArgs {
  @TypeGraphQL.Field(_type => MeetingWhereInput, {
    nullable: true
  })
  where?: MeetingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MeetingOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: MeetingOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => MeetingWhereUniqueInput, {
    nullable: true
  })
  cursor?: MeetingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MeetingScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "subject" | "start_date" | "end_date" | "duration" | "status" | "related_to" | "reminders" | "content" | "assigned_to" | "invitees" | "scheduling"> | undefined;
}
