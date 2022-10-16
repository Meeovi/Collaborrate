import { MeetingOrderByWithAggregationInput } from "../../../inputs/MeetingOrderByWithAggregationInput";
import { MeetingScalarWhereWithAggregatesInput } from "../../../inputs/MeetingScalarWhereWithAggregatesInput";
import { MeetingWhereInput } from "../../../inputs/MeetingWhereInput";
export declare class GroupByMeetingArgs {
    where?: MeetingWhereInput | undefined;
    orderBy?: MeetingOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "subject" | "start_date" | "end_date" | "duration" | "status" | "related_to" | "reminders" | "content" | "assigned_to" | "invitees" | "scheduling">;
    having?: MeetingScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
