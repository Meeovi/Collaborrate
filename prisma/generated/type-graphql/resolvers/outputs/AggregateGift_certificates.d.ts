import { Gift_certificatesAvgAggregate } from "../outputs/Gift_certificatesAvgAggregate";
import { Gift_certificatesCountAggregate } from "../outputs/Gift_certificatesCountAggregate";
import { Gift_certificatesMaxAggregate } from "../outputs/Gift_certificatesMaxAggregate";
import { Gift_certificatesMinAggregate } from "../outputs/Gift_certificatesMinAggregate";
import { Gift_certificatesSumAggregate } from "../outputs/Gift_certificatesSumAggregate";
export declare class AggregateGift_certificates {
    _count: Gift_certificatesCountAggregate | null;
    _avg: Gift_certificatesAvgAggregate | null;
    _sum: Gift_certificatesSumAggregate | null;
    _min: Gift_certificatesMinAggregate | null;
    _max: Gift_certificatesMaxAggregate | null;
}
