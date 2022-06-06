import { MeetingAvgAggregate } from "../outputs/MeetingAvgAggregate";
import { MeetingCountAggregate } from "../outputs/MeetingCountAggregate";
import { MeetingMaxAggregate } from "../outputs/MeetingMaxAggregate";
import { MeetingMinAggregate } from "../outputs/MeetingMinAggregate";
import { MeetingSumAggregate } from "../outputs/MeetingSumAggregate";
export declare class AggregateMeeting {
    _count: MeetingCountAggregate | null;
    _avg: MeetingAvgAggregate | null;
    _sum: MeetingSumAggregate | null;
    _min: MeetingMinAggregate | null;
    _max: MeetingMaxAggregate | null;
}
