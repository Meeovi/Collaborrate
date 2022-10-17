import { InvitationsAvgAggregate } from "../outputs/InvitationsAvgAggregate";
import { InvitationsCountAggregate } from "../outputs/InvitationsCountAggregate";
import { InvitationsMaxAggregate } from "../outputs/InvitationsMaxAggregate";
import { InvitationsMinAggregate } from "../outputs/InvitationsMinAggregate";
import { InvitationsSumAggregate } from "../outputs/InvitationsSumAggregate";
export declare class InvitationsGroupBy {
    id: bigint;
    created_at: Date | null;
    invoiceDate: Date | null;
    email: string | null;
    billingAddress: string | null;
    shippingAddress: string | null;
    orderNumber: string | null;
    grandTotalPurchased: string | null;
    paymentMethod: string | null;
    status: string | null;
    media: string | null;
    content: string | null;
    _count: InvitationsCountAggregate | null;
    _avg: InvitationsAvgAggregate | null;
    _sum: InvitationsSumAggregate | null;
    _min: InvitationsMinAggregate | null;
    _max: InvitationsMaxAggregate | null;
}
