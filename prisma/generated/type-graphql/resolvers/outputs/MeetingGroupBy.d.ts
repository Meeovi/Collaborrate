import { MeetingAvgAggregate } from "../outputs/MeetingAvgAggregate";
import { MeetingCountAggregate } from "../outputs/MeetingCountAggregate";
import { MeetingMaxAggregate } from "../outputs/MeetingMaxAggregate";
import { MeetingMinAggregate } from "../outputs/MeetingMinAggregate";
import { MeetingSumAggregate } from "../outputs/MeetingSumAggregate";
export declare class MeetingGroupBy {
    id: bigint;
    created_at: Date | null;
    subject: string | null;
    start_date: string | null;
    end_date: string | null;
    duration: string | null;
    status: string | null;
    related_to: string | null;
    reminders: string | null;
    content: string | null;
    assigned_to: string | null;
    invitees: string | null;
    scheduling: string | null;
    _count: MeetingCountAggregate | null;
    _avg: MeetingAvgAggregate | null;
    _sum: MeetingSumAggregate | null;
    _min: MeetingMinAggregate | null;
    _max: MeetingMaxAggregate | null;
}
