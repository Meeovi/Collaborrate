export declare class MeetingOrderByRelevanceInput {
    fields: Array<"subject" | "start_date" | "end_date" | "duration" | "status" | "related_to" | "reminders" | "content" | "assigned_to" | "invitees" | "scheduling">;
    sort: "asc" | "desc";
    search: string;
}
