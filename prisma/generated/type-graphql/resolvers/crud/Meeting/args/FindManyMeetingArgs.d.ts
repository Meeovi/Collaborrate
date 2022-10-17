import { MeetingOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MeetingOrderByWithRelationAndSearchRelevanceInput";
import { MeetingWhereInput } from "../../../inputs/MeetingWhereInput";
import { MeetingWhereUniqueInput } from "../../../inputs/MeetingWhereUniqueInput";
export declare class FindManyMeetingArgs {
    where?: MeetingWhereInput | undefined;
    orderBy?: MeetingOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: MeetingWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "subject" | "start_date" | "end_date" | "duration" | "status" | "related_to" | "reminders" | "content" | "assigned_to" | "invitees" | "scheduling"> | undefined;
}
