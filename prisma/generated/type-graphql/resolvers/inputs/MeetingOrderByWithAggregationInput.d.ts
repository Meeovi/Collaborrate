import { MeetingAvgOrderByAggregateInput } from "../inputs/MeetingAvgOrderByAggregateInput";
import { MeetingCountOrderByAggregateInput } from "../inputs/MeetingCountOrderByAggregateInput";
import { MeetingMaxOrderByAggregateInput } from "../inputs/MeetingMaxOrderByAggregateInput";
import { MeetingMinOrderByAggregateInput } from "../inputs/MeetingMinOrderByAggregateInput";
import { MeetingSumOrderByAggregateInput } from "../inputs/MeetingSumOrderByAggregateInput";
export declare class MeetingOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    subject?: "asc" | "desc" | undefined;
    start_date?: "asc" | "desc" | undefined;
    end_date?: "asc" | "desc" | undefined;
    duration?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    related_to?: "asc" | "desc" | undefined;
    reminders?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    assigned_to?: "asc" | "desc" | undefined;
    invitees?: "asc" | "desc" | undefined;
    scheduling?: "asc" | "desc" | undefined;
    _count?: MeetingCountOrderByAggregateInput | undefined;
    _avg?: MeetingAvgOrderByAggregateInput | undefined;
    _max?: MeetingMaxOrderByAggregateInput | undefined;
    _min?: MeetingMinOrderByAggregateInput | undefined;
    _sum?: MeetingSumOrderByAggregateInput | undefined;
}
