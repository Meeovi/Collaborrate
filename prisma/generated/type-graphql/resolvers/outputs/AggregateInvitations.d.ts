import { InvitationsAvgAggregate } from "../outputs/InvitationsAvgAggregate";
import { InvitationsCountAggregate } from "../outputs/InvitationsCountAggregate";
import { InvitationsMaxAggregate } from "../outputs/InvitationsMaxAggregate";
import { InvitationsMinAggregate } from "../outputs/InvitationsMinAggregate";
import { InvitationsSumAggregate } from "../outputs/InvitationsSumAggregate";
export declare class AggregateInvitations {
    _count: InvitationsCountAggregate | null;
    _avg: InvitationsAvgAggregate | null;
    _sum: InvitationsSumAggregate | null;
    _min: InvitationsMinAggregate | null;
    _max: InvitationsMaxAggregate | null;
}
